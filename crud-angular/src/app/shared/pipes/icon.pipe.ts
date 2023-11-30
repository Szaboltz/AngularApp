import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon',
})
export class IconPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case "Henrique": return "code"
      case "Hemelin": return "computer"
    }
    return "code";
  }
}
