import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTask2]',
  exportAs: 'appTask2',
})
export class Task2Directive {
  @HostListener('mouseenter')
  onHover() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }
  constructor(private el: ElementRef) {}
}
