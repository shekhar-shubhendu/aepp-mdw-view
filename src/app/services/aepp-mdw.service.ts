import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AeppMdwService {

  MDW_URL = 'https://mdw.aepps.com/'

  constructor(private http: HttpClient) { }

  getAllContracts() {
    return this.http.get<any>(`${this.MDW_URL}/middleware/contracts/all`);
  }

  getActiveChannels() {
    return this.http.get<any>(`${this.MDW_URL}/middleware/channels/active`);
  }

  getAllOracles() {
    return this.http.get<any>(`${this.MDW_URL}/middleware/oracles/all`);
  }
}
