import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterateObject'
})
export class IterateObjectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let iterateable: { [key: string]: any } = value;
    let values = [];
    for (let key in iterateable) {
      values.push(iterateable[key]);
    }
    return values;
  }

}
