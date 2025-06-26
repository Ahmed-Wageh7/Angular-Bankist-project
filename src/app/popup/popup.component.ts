import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent {
  @Input() showModal = false;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.showModal = false; // ده لو حابب تقفله داخليًا
    this.close.emit();
  }

  onClose() {
    this.close.emit(); // بلغ الأب إنه يتقفل
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    if (this.showModal) {
      this.closeModal();
    }
  }
}
