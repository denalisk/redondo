import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'waitPipe',
  pure: false
})
export class WaitPipe implements PipeTransform {

  transform(input: any, holdup: any): any {
    if (holdup != null) {
      console.log(holdup);
      return input;
    }
    console.log("Finishing wait");
    return input;
  }

}
