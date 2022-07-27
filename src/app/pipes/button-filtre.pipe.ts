import { Pipe, PipeTransform } from '@angular/core';
import { Button } from '../interfaces/button';

@Pipe({
  name: 'buttonFiltre'
})
export class ButtonFiltrePipe implements PipeTransform {

  transform(items: Button[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.titre.indexOf(filter) !== -1);
  }

}
