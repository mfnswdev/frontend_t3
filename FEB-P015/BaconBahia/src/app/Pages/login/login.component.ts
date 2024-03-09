import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailLoginValidator } from '../../Validators/email-login.validator';
import { passwordValidator } from '../../Validators/password.validator';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      'user': new FormControl(null, [Validators.required, emailLoginValidator()]),
      'password': new FormControl(null, [Validators.required, passwordValidator()]),
    });
  }

  login() {
    this.authService.loginUser(this.form.value.user, this.form.value.password).subscribe({
      next: () => {
        alert("Logando...")
        this.router.navigate(['/']);
      },
      error: () => {
        alert("E-mail ou senha inválidos!")
      }
    });
  }

  register() {
    this.authService.signupUser(this.form.value.user, this.form.value.password).subscribe({
      next: () => {
        alert("Usuário cadastrado!")
        this.router.navigate(['/']);
      },
      error: () => {
        alert("E-mail ou senha inválidos para cadastrar!")
      }
    });
  }

}
