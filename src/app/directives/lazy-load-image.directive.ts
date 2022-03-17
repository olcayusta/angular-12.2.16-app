import {AfterViewInit, Directive, ElementRef, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appLazyLoadImage]'
})
export class LazyLoadImageDirective implements OnInit {
  @HostBinding('attr.src') src = '';
  @Output() isIntersecting = new EventEmitter<boolean>();

  tempSrc!: string;

  constructor(private elementRef: ElementRef<HTMLImageElement>) {
    this.tempSrc = this.src;
  }

  ngOnInit() {
    const {nativeElement} = this.elementRef;
    this.tempSrc = nativeElement.src;

    const io = new IntersectionObserver(([{isIntersecting}]) => {
      if (isIntersecting) {
        nativeElement.src = this.tempSrc;
        io.unobserve(nativeElement);
      }
    });
    io.observe(nativeElement);
  }

}
