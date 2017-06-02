import { Component } from '@angular/core';
import { Router } from '@angular/router';
import template from './compose-message.component.html';
@Component({
    template,
    styles: []
})

export class ComposeMessageComponent {
    details: string;
  sending: boolean = false;

  constructor(private router: Router) {}

  send() {
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}