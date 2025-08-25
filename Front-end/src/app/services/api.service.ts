import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginCredentials } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient){}


login(credentials: LoginCredentials): Observable<any> {
  return this.http.post(this.apiUrl, credentials);
}

  }

