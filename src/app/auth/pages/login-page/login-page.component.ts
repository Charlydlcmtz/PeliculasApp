import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    nombreUsuario: [ '', [ Validators.required ] ],
    password: [ '', [ Validators.required, Validators.minLength(8) ] ]
  });

  login() {
    const { nombreUsuario, password } = this.loginForm.value;
    this.authService.login(nombreUsuario, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          console.log(message);
          let mensaje = message.error.mensaje;
          Swal.fire('Aviso', mensaje, 'info');
        }
      })
  }

}
