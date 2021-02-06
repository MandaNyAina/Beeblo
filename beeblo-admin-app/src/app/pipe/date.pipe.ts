import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string): any {
    let date = new Date(value);
    return date.toDateString();
  }

}
