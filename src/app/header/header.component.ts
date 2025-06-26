import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
@Component({
  selector: 'app-header',
  imports: [CommonModule, PopupComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navLinks = [
    { href: '#section--1', label: 'Features' },
    { href: '#section--2', label: 'Operations' },
    { href: '#section--3', label: 'Testimonials' },
    {
      label: 'Open account',
      href: '#',
      extraClasses: ['nav__link--btn', 'btn--show-modal'],
    },
  ];

  hoveredLink: any = null;
  showModal = false;
  @Input() isSticky: boolean = false;

  get isHovered(): boolean {
    return this.hoveredLink !== null;
  }
  onHover(link: any) {
    this.hoveredLink = link;
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  onLinkClick(e: Event, index: number) {
    e.preventDefault(); // 👈 نمنع السلوك الافتراضي للينك
    const isLast = index === this.navLinks.length - 1;
    if (isLast) {
      this.showModal = true;
    } else {
      const sectionId = this.navLinks[index].href.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  onClosePopup() {
    this.showModal = false;
  }
}
