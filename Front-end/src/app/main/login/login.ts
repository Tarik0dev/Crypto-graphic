import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Authentification, User } from '../../models/authentification';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit
{

  dataUser: User[] = []
  constructor(private apiService: ApiService){}

  ngOnInit(): void {

    this.apiService.getUserData().subscribe(Response => {
      this.dataUser = Response.dataUser
      return console.log(this.dataUser)
    })
  }

}
