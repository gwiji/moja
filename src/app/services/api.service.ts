import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'})
};

const BASE_URL = "https://umoja-379917.ey.r.appspot.com/";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  authenticate(credentials:any){
    return this.http.post<any>(BASE_URL+'api/authenticate', credentials, httpOptions)
  }

  getWallet(){
    return this.http.get<any>(BASE_URL+'api/wallets', httpOptions)
  }

  getPartners(){
    return this.http.get<any>(BASE_URL+'api/partners', httpOptions)
  }

  getCountries(){
    return this.http.get<any>(BASE_URL+'api/countries', httpOptions)
  }
}
