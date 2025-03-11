import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usuarioImage',
  standalone: false
})
export class UsuarioImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
