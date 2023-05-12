import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powOf'
})
export class PowOfPipe implements PipeTransform {

  transform(x: number, y:number): number {
    return Math.pow(x,y);
  }

}
