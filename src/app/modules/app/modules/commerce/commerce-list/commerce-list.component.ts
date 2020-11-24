import { Component, OnInit } from '@angular/core';
import { CommerceService } from '../../../services/commerce/commerce.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-commerce-list',
  templateUrl: './commerce-list.component.html',
  styleUrls: ['./commerce-list.component.css']
})
export class CommerceListComponent implements OnInit {

  public commerces = [];
  public commercesReady = false; 
  constructor(private _commerceService: CommerceService) {
    this._commerceService.getCommerces().subscribe( (res) => {
      this.commerces = res;
      this.commercesReady = true;
      console.log(res);
    });
  }

  ngOnInit(): void {

  }

  public createCommerce() {
    Swal.fire({
      title: 'Indique el nombre del comercio',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: 'Red',
      inputValidator: (value) => {
        if (!value) {
          return '¡Necesitas escribir un nombre!'
        }
      }
    }).then( (result) => {
      if(result.value) {
        this._commerceService.postCommerce(result.value).subscribe((res) => {
          this.commerces.push(res);
        });
      }
    });
  }

}
