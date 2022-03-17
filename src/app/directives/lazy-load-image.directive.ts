import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appLazyLoadImage]'
})
export class LazyLoadImageDirective implements OnInit {
  constructor(private elementRef: ElementRef<HTMLImageElement>) {
  }

  ngOnInit() {
    const nativeElement = this.elementRef.nativeElement;

    const io = new IntersectionObserver(([{isIntersecting}]) => {
      if (isIntersecting) {
        nativeElement.src = nativeElement.dataset.src!;
        console.log(nativeElement.dataset);
        io.unobserve(nativeElement);
      }
    });
    io.observe(nativeElement);
  }

}
