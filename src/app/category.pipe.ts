import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe',
  pure: false
})
export class CategoryPipe implements PipeTransform {

  transform(input: any[], category: string): any {
    let output: any[] = [];
    if (input != null) {
      if (category === "All" || category == null) {
        for (let item of input) {
          for (let tile of item.tiles) {
            output.push(tile);
          }
        }
      } else {
        for (let item of input) {
          if (item.name === category) {
            for (let tile of item.tiles) {
              output.push(tile);
            }
          }
        }
      }
    }
    return output;
  }
}
