import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authentification, User } from '../models/authentification';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'localhost:3000/auth';

  constructor(private http: HttpClient){}


  getUserData(): Observable<Authentification>{
    return this.http.get<Authentification>(this.apiUrl)
  }
}
