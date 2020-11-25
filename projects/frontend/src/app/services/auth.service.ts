import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl:string;
  url="https://moviebooking-server.herokuapp.com/api/users"
  constructor(private http: HttpClient) { 
    this.apiUrl =  environment.API_URL;
    console.log(this.apiUrl);
  }
  storeLoginDetails(user) {
    localStorage.setItem('LOGGED_IN_USER', JSON.stringify(user));
  }
  getdestinations(){
    return this.http.get(this.url);
  }
}