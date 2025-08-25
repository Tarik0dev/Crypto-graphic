import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink,RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  email = '';
  password = '';
  confirmPassword = '';

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert("❌ Les mots de passe ne correspondent pas !");
      return;
    }

    alert("✅ Formulaire soumis")

    // ➡️ Ici tu appelleras ton ApiService.register()
  }

}
