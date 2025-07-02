import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appFondo]'
})
export class FondoDirective {
  @Input('appFondo') color= 'lightblue';
  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor = null;
  }

  
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.transition = 'background-color 0.3s ease';
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}


