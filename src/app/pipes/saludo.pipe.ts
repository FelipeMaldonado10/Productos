import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saludo'
})
export class SaludoPipe implements PipeTransform {

  transform(value: string, hora: number): string {
    if (hora < 12) return 'Buenos días, '+ value;
    if (hora < 18) return 'Buenas tardes, '+value;
    return 'Buenas noches, '+value;
  }

}
