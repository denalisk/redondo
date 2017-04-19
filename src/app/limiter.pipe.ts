import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limiter'
})
export class LimiterPipe implements PipeTransform {

  transform(input: any[], limit: number): any[] {
    let output: any[] = [];
    if (input != null) {
      for (let index = 0; index < limit; index ++) {
        let choice = Math.floor(Math.random()*input.length);
        output.push(input[choice]);
        input.splice(choice, 1);
      }
    }
    return output;
  }

}
