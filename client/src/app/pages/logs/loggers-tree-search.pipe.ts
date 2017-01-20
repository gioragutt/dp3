import { Pipe, PipeTransform } from '@angular/core';
import { Loggers } from './logger';

@Pipe({
  name: 'loggersTreeSearch'
})
export class LoggersTreeSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args || args === '') {
      return value;
    }

    let loggers = <Loggers>value;
    let search = <string>args;
    for (let name in loggers) {
      let logger = loggers[name];
      
    }
  }

}
