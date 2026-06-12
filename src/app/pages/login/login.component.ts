import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email = '';
  password = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async login() {
    try {

      this.error = '';

      await this.authService.login(
        this.email,
        this.password
      );

      await this.router.navigate(['/dashboard']);

    } catch (error: any) {

      this.error = error.message;

      console.error(error);
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}