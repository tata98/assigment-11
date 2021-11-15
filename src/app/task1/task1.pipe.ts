import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'task1',
})
export class Task1Pipe implements PipeTransform {
  transform(value: Date): number {
    const today = new Date();
    const age = today.getFullYear() - value.getFullYear();
    return age;
  }
}
