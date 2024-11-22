import { Component, inject } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  authService = inject(AuthService);
  routerService = inject(Router);

  name: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';
  role: string = 'admin';
  rememberMe: boolean = false;

  onSubmit() {
    if (this.name && this.email && this.password && this.phone) {
      this.authService
        .signup({
          name: this.name,
          email: this.email,
          password: this.password,
          phone: this.phone,
          role: this.role,
          rememberMe: this.rememberMe,
        })
        .subscribe({
          next: (data) => {
            console.log(data);
            this.routerService.navigate(['/login']);
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }
}
