/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[removeEle]'
})
export class RemoveDirective {

  constructor(private el: ElementRef) {
    setTimeout(() => {
      console.log(this.remEleTime);
      setTimeout(() => {
        this.el.nativeElement.remove();
      }, this.remEleTime);
    }, 0);
  }


  @Input('removeEle') remEleTime: string;

}
