import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  color = 'lightblue';

    constructor(private el: ElementRef) {
     }

    highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color
    }

     @HostListener('mouseenter')
     onMouseEnterEvent() {
        this.highlight(this.color)
     }

     @HostListener('mouseleave')
     onMouseLeaveEvent() {
       this.highlight('');
     }

}
