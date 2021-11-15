import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appTask1]',
})
export class Task1Directive implements OnInit {
  @Input() initialColor: string = '';
  @HostListener('click')
  onClick() {
    this.el.nativeElement.style.backgroundColor = 'grey';
  }
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.initialColor;
  }
}
