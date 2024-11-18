import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-register',
  standalone: true, // Indicates the component is standalone
  imports: [FormsModule, HttpClientModule, CommonModule], // Use HttpClientModule, not HttpClient
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register({ username: this.username, password: this.password }).subscribe(
      (response) => {
        console.log('Registration Successful:', response);
      },
      (error) => {
        this.error = 'Registration failed. Username may already exist.';
      }
    );
  }
}
