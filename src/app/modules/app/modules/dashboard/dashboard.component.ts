import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { AccountsService } from '../../services/accounts/accounts.service';
import { CreditCardService } from '../../services/credit-card/credit-card.service';
import { LocalService } from '../../services/local-storage/local.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{ display: false }] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Balance' },
    { data: [], label: 'Límite' },
  ];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    },
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartColors = [
    {
      backgroundColor: [],
    },
  ];

  totalBalance: number = 0;
  userInfo: any;
  lastTransactions: any = [];

  creditCardsResumeReady = false;
  accountBalanceReady = false;
  transactionsReady = false;

  constructor(
    private creditCardService: CreditCardService,
    private accountsService: AccountsService,
    private localService: LocalService
  ) {}

  ngOnInit(): void {
    this.getCreditCards();
    this.getAccounts();
    this.getUserInfo();
  }

  getUserInfo() {
    this.userInfo = this.localService.getValue('userData');
  }

  getAccounts() {
    this.accountsService.getAccounts().subscribe((res) => {
      this.totalBalance = 0;
      res.forEach((account) => {
        this.totalBalance += account.balance;
        this.pieChartLabels.push(account.number);
        this.pieChartData.push(account.balance);
        this.pieChartColors[0].backgroundColor.push(this.random_rgba());
        console.log(account.transactions);
        this.lastTransactions = [
          ...this.lastTransactions,
          ...(account.transactions ?? []),
        ];
      });
      this.accountBalanceReady = true;

      this.lastTransactions = this.lastTransactions.sort((a, b) => a.id - b.id);
      this.lastTransactions.reverse();
      // transactions ready
      this.transactionsReady = true;
    });
  }

  getCreditCards() {
    this.creditCardService.getCreditCards().subscribe((res) => {
      res.forEach((creditCard) => {
        this.barChartLabels.push(creditCard.number);
        this.barChartData[0].data.push(creditCard.balance);
        this.barChartData[1].data.push(creditCard.limit);
      });
      this.creditCardsResumeReady = true;
    });
  }

  random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      'rgba(' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      r().toFixed(1) +
      ')'
    );
  }
}
