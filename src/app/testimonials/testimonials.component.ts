import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-testimonials',
  imports: [RevealOnScrollDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  // testimonial.component.ts

  currentSlide = 0;

  testimonials = [
    {
      img: 'user-1.jpg',
      name: 'Ahmed Wageh',
      location: 'Cairo, Egypt',
      header: 'Best platform ever!',
      text: 'Amazing experience. I love how easy it was to use this platform!',
    },
    {
      img: 'user-2.jpg',
      name: 'Sarah Adel',
      location: 'Alexandria, Egypt',
      header: 'Saved me hours!',
      text: 'I saved so much time and effort, highly recommend it to everyone.',
    },
    {
      img: 'user-3.jpg',
      name: 'Kareem Tarek',
      location: 'Mansoura, Egypt',
      header: 'Life changing',
      text: 'A complete game-changer. I will never go back to the old way.',
    },
  ];

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
}
