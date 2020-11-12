import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import SecureStorage from 'secure-web-storage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  constructor() { }

  public secureStorage = new SecureStorage(localStorage, {

    hash: function hash(key) {
      key = CryptoJS.SHA256(key, environment.encryptKey);
      return key.toString();
    },

    encrypt: function encrypt(data) {
      data = CryptoJS.AES.encrypt(data, environment.encryptKey);
      data = data.toString();
      return data;
    },

    decrypt: function decrypt(data) {
      data = CryptoJS.AES.decrypt(data, environment.encryptKey);
      data = data.toString(CryptoJS.enc.Utf8);
      return data;
    }
  });
}
