import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScrollDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const element = this.el.nativeElement;

    // خليه مستخبي في البداية
    element.classList.add('section--hidden');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        const entry = entries[0];

        if (!entry.isIntersecting) return;

        element.classList.remove('section--hidden');
        observer.unobserve(element);
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    observer.observe(element);
  }
}
