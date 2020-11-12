import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
providedIn: 'root'
})
export class LocalService {

  constructor(private storageService: StorageService) { }

  setValue(key: string, value: any) {
    this.storageService.secureStorage.setItem(key, value);
  }

  getValue(key: string) {
    return this.storageService.secureStorage.getItem(key);
  }

  clearToken() {
    return this.storageService.secureStorage.clear();
  }
}
