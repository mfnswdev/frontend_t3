import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'giuseppe'
})
export class GiuseppePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
