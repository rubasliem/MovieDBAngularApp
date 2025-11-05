import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Auth {

  constructor(private _httpClient: HttpClient) {}

  userDate:object={};

  saveUserData(){
    let endodedToken = JSON.stringify( localStorage.getItem('userToken'));
    let decodedToken = jwtDecode(endodedToken);
    this.userDate=decodedToken;
    console.log(this.userDate);
  } 
  register(userData: any): Observable<any> {
    return this._httpClient.post('/api/users/signup', userData);
  }

    login(userData: any): Observable<any> {
    return this._httpClient.post('/api/users/signin', userData);
  }
  
  
}
function jwtDecode(endodedToken: string): object {
  throw new Error('Function not implemented.');
}

