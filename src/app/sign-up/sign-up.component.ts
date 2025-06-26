import { Component, Output } from '@angular/core';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-sign-up',
  imports: [RevealOnScrollDirective, PopupComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  isModalOpen = false;

  onLinkClick(event: Event) {
    event.preventDefault();
    this.isModalOpen = true;
  }

  onClosePopup() {
    this.isModalOpen = false;
  }
}
