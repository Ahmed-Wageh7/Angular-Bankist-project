import { AfterViewInit, Component } from '@angular/core';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  imports: [RevealOnScrollDirective],
})
export class FeaturesComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      const imgTargets =
        document.querySelectorAll<HTMLImageElement>('img[data-src]');

      const loadImg = (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const [entry] = entries;

        if (!entry.isIntersecting) return;

        const imgEl = entry.target as HTMLImageElement;

        imgEl.src = imgEl.dataset['src'] || '';
        imgEl.addEventListener('load', function () {
          imgEl.classList.add('lazy-img-loaded');
        });

        observer.unobserve(entry.target);
      };

      const imgObserver = new IntersectionObserver(loadImg, {
        root: null,
        threshold: 0,
        rootMargin: '200px',
      });

      imgTargets.forEach((img) => imgObserver.observe(img));
    });
  }
}

// we will set timeout to it to make it blurless in the first time
