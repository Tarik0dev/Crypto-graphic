import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [FormsModule, RouterLink,RouterModule]
})
export class Login {
  email = '';
  password = '';
  error = '';

  constructor(private apiService: ApiService) {}

  onSubmit() {
  const credentials = {
    email: this.email,
    password: this.password
  };

  this.apiService.login(credentials)
    .subscribe({
      next: (res) => {
        alert('Vous êtes bien connecté');
      },
      error: (err) => {
        alert('Mauvais identifiants');
      }
    });
}
}
