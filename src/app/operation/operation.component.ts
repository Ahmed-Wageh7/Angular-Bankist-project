import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';
@Component({
  selector: 'app-operation',
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css',
})
export class OperationComponent {
  // component.ts
  selectedTab: number = 1;

  tabs = [
    {
      id: 1,
      title: 'Instant Transfers',
      icon: 'icons.svg#icon-upload',
      header: 'Transfer money to anyone, instantly! No fees, no BS.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor...',
    },
    {
      id: 2,
      title: 'Instant Loans',
      icon: 'icons.svg#icon-home',
      header: 'Buy a home or make your dreams come true, with instant loans.',
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...',
    },
    {
      id: 3,
      title: 'Instant Closing',
      icon: 'icons.svg#icon-user-x',
      header: 'No longer need your account? No problem! Close it instantly.',
      content:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...',
    },
  ];

  selectTab(tabId: number) {
    this.selectedTab = tabId;
  }
}
