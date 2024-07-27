import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  standalone: true
})
export class DropdownComponent {
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;
  }

  @HostListener('click', ['$event'])
  handleInsideClick(event: Event) {
    event.stopPropagation();
  }
}
