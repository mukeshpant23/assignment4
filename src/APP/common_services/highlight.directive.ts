/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    let i = 0;
    setInterval(() => {
      this.highlight(this.highlightColor[i]);
      i++;
      if (i >= this.highlightColor.length) {
        i = 0;
      }
    }, 1000);
  }


  @Input('myHighlight') highlightColor: string;



  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
