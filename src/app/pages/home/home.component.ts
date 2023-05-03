import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title: string = 'Blue Notes';
  description: string = 'A music web client built on the NOSTR protocol';

  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'title', content: this.title });
    this.meta.addTag({ name: 'description', content: this.description });
  }
}
