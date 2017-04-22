import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limiterPipe',
  pure: false
})
export class LimiterPipe implements PipeTransform {

  transform(input: any[], limit: number): any[] {
    let output: any[] = [];
    if (input.length > 0 && input != null) {
      if (limit != 0) {
        for (let index = 0; index < limit; index ++) {
          let choice = Math.floor(Math.random()*input.length);
          output.push(input[choice]);
          input.splice(choice, 1);
        }
      } else {
        output = input.slice();
      }
    }
    return output;
  }

}
