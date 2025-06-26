import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { OperationComponent } from './operation/operation.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FeaturesComponent,
    OperationComponent,
    TestimonialsComponent,
    SignUpComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('featuresSection', { static: true }) featuresSection!: ElementRef;
  isStickyHeader = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const featuresSection = document.getElementById('features');
    if (!featuresSection) return;

    const rect = featuresSection.getBoundingClientRect();
    this.isStickyHeader = rect.top <= 90; // لو بقى فوق أو دخل الشاشة
  }
}
