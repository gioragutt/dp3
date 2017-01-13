import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args === undefined || args === '') {
      return value;
    }

    let source = <string[]>value;
    let dest: string[] = [];
    let searchValue = (<string>args).toLowerCase();
    source.forEach(element => {
      if (this.fitsFilter(element, searchValue)) {
        dest.push(element);
      }
    });

    return dest;
  }

  fitsFilter(checked: string, search: string): boolean {
    return checked.toLowerCase().includes(search);
  }
}
