import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[kilCerealBorder]',
  standalone: true,
})
export class CerealBorderDirective {
  private initialColor: string;

  constructor(private el: ElementRef) {
    this.initialColor = this.el.nativeElement.style.borderColor;
    this.el.nativeElement.style.borderWidth = '2px';
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }
}
