import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

declare var require: any;
const CryptoJS = require('crypto-js');

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  //Method to save the storage encrypted
  public setStorage(variable: string, data: object) {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), variable).toString();
    const cripVariableName = this.encryptingString(variable);
    localStorage.setItem(cripVariableName, ciphertext);
  }

  //Method to read the storage
  public getStorage(variable: string): Observable<any> {
    return new Observable((observer => {
      const cripVariableName = this.encryptingString(variable);
      const localStorageVariable = localStorage.getItem(cripVariableName);
      let decryptedData = null;
      if (localStorageVariable) {
        const bytes = CryptoJS.AES.decrypt(localStorageVariable, variable);
        decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      observer.next(decryptedData);
      observer.complete();
    }));
  }

  encryptingString(string: string): string {
    const enprictedLetters = [];
    for (let index = 0; index < string.length; index++) {
      enprictedLetters.push((-string.charCodeAt(index) & 0xFF));
      enprictedLetters.push((string.charCodeAt(index) - 5 & 0xFF));
      enprictedLetters.push((string.charCodeAt(index) + 5 & 0xFF));
      enprictedLetters.push((string.charCodeAt(index) + 2 & 0xFF));
      enprictedLetters.push((string.charCodeAt(index) - 2 & 0xFF));
    }
    return String.fromCharCode(...enprictedLetters);
  }

  
  public clearStorage() {
    localStorage.clear();
  }


  public removeStorage(key: any) {
    localStorage.removeItem(this.encryptingString(key));
  }
}
