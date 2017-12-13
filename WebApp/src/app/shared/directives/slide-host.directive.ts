import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[khSlideHost]',
})
export class SlideHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
