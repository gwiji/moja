import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import * as moment from "moment";
import { Router } from '@angular/router';
import { ApiService } from './api.service';


const BASE_URL = 'https://umoja-379917.ey.r.appspot.com';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private route: Router,private api: ApiService) { }

  getToken(credentials: any) {
    return this.api.authenticate(credentials)
    .pipe(tap(res => this.setSession(res)),shareReplay());
  }

  private setSession(res:any){
    const expiresAt = moment().add(3600,'second');

    localStorage.setItem('id_token', JSON.stringify(res.id_token.replace(/['"]+/g, '')));
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );

    this.route.navigate(['/dashboard']);
  }

    logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(String(expiration));
        return moment(expiresAt);
    }  

}
