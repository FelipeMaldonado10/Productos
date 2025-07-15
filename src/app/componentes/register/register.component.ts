import { Component } from '@angular/core';
import { FormsModule,FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name='';
  email = '';
  password = '';
  message = '';
  error = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.email, this.password).subscribe({
      next: (res) => {
        this.message = 'Usuario registrado correctamente';
        this.error = '';
      },
      error: (err) => {
        this.error = err.error.message || 'Error en el registro';
        this.message = '';
      }
    });
  }
}
