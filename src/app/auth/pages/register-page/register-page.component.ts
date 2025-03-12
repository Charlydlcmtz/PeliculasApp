import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ValidatorsService } from '../../../shared/services/validators.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  private fb = inject( FormBuilder );
  private authService = inject( AuthService );
  private router = inject( Router );
  private validatorService = inject( ValidatorsService );

  public registerForm: FormGroup = this.fb.group({
    nombreUsuario: ['', [ Validators.required, Validators.maxLength(30) ]],
    nombre: ['', [ Validators.required ]],
    password: ['', [ Validators.required, Validators.minLength(8) ]],
    password_confirm: ['', [ Validators.required, Validators.minLength(8) ]]
  });

  isValidFieldUser(field: string): boolean | null {
    return this.registerForm.controls[field].errors
      && this.registerForm.controls[field].touched
  }

  getFieldErrorUser(field: string): string | null {
    if (!this.registerForm.controls[field]) return null;

    const errors = this.registerForm.controls[field].errors || {};

    if (errors['required']) {
      if (field === 'nombreUsuario') return 'El campo username es requerido';
      if (field === 'nombre') return 'El campo nombre es requerido';
      if (field === 'password') return 'El campo contraseña es requerida';
      if (field === 'password_confirm') return 'El campo confirmar contraseña es requerida';
    }

    if (errors['maxlength']) {
      const maxLength = errors['maxlength'].requiredLength;
      return `El campo ${field} puede tener como máximo ${maxLength} caracteres.`;
    }

    return null;
  }

  register() {
    const { nombreUsuario, nombre, password, password_confirm } = this.registerForm.value;

    if (!this.validatorService.isFieldOneEqualFieldTwo(password, password_confirm)) {
      Swal.fire({
        title: 'Aviso',
        text: 'Las contraseñas no son iguales',
        icon: 'info',
        allowOutsideClick: false // Evita que se cierre por clickear fuera de la modal.
      })
      return;
    }

    //Crear formData
    const formData: FormData = new FormData();
    formData.append("nombreUsuario", nombreUsuario);
    formData.append("nombre", nombre);
    formData.append("password", password);

    this.authService.register(formData)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          console.log(message)
          let mensaje = message.error.mensaje;
          Swal.fire({
            title: 'Aviso',
            text: mensaje,
            icon: 'info',
            allowOutsideClick: false, // Evita que se cierre la modal clickeando afuera.
          });
        }
      })
  }

}
