import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImage',
  standalone: false
})
export class PeliculaImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
