import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
// import { gapi } from 'gapi-script';
declare var gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id:
          '32272480244-s38hv32sr03hibhe7miuifoso7d02nvf.apps.googleusercontent.com', // Replace with your actual Client ID
      });
    });
  }

  email: string = '';
  password: string = '';
  role: string = 'admin';
  rememberMe: boolean = false;

  signInWithGoogle() {
    const auth2 = gapi.auth2.getAuthInstance();
    console.log(auth2);

    auth2
      .signIn()
      .then((googleUser: any) => {
        const idToken = googleUser.getAuthResponse().id_token;
        console.log(idToken);

        // Send the token to the backend for verification
        this.authService
          .socialLogin({ token: idToken, provider: 'google' })
          .subscribe(
            (data: any) => {
              console.log('User logged in with Google:', data);
              this.router.navigate(['/home']);
            },
            (error) => {
              console.error('Backend authentication failed:', error);
            }
          );
      })
      .catch((error: any) => {
        // Specific handling for popup closed error
        if (error.error === 'popup_closed_by_user') {
          console.log('Popup was closed by user, please try again.');
        } else {
          console.log('Google login failed:', error);
        }
      });
  }

  onSubmit() {
    const data = {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe,
      role: this.role,
    };

    this.authService.login(data).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
      },
      complete() {},
    });

    console.log('Login attempt:', {});
  }
}
