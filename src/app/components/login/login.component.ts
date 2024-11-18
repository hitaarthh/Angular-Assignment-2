import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone  : true, // Indicates the component is standalone
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  remainingAttempts = 3;

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      (response) => {
        console.log('Login Successful:', response);
      },
      (error) => {
        this.remainingAttempts--;
        this.error = this.remainingAttempts > 0
          ? 'Invalid login. Please try again.'
          : 'Account locked due to too many failed attempts.';
      }
    );
  }
}
