import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenName'
})
export class ShortenNamePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let shouldShorten = typeof args === 'boolean' && args == true;
    let isValueString = typeof value === 'string';
    if (!shouldShorten || !isValueString) {
      return value;
    }
    
    let splitString: string[] = value.split('.');
    let shortName = splitString[splitString.length - 1];
    return shortName;
  }
}
