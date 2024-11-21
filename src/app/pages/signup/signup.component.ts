import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.6s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('0.6s ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  phoneNumber: string = '';
  role: string = 'admin';
  rememberMe: boolean = false;
  formVisible: boolean = true;

  onSubmit() {
    console.log('Form submitted', {
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber,
      role: this.role,
      rememberMe: this.rememberMe,
    });
  }
}
