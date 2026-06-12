import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  email = '';
  password = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async register() {
    try {

      this.error = '';

      await this.authService.register(
        this.email,
        this.password
      );

      await this.router.navigate(['/dashboard']);

    } catch (error: any) {

      this.error = error.message;

      console.error(error);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}