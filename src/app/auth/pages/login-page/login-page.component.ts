import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {


  private fb = inject( FormBuilder );
  private authService = inject( AuthService );
  private router = inject( Router );

  public loginForm: FormGroup = this.fb.group({
    correo: [ '', [ Validators.required, Validators.email ] ],
    password: [ '', [ Validators.required, Validators.minLength(8) ] ]
  });

  login() {

    const { correo, password } = this.loginForm.value;

    this.authService

  }

}
