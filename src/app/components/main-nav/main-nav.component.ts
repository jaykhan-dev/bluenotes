import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Links } from 'src/app/models/links';
import { Tags } from 'src/app/models/tags';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  toggle: boolean = false;

  links: Links[] = [];

  // Tags that are commonly used to filter music related content
  // can be removed
  tags: Tags[] = [
    { name: 'alternative' },
    { name: 'blues' },
    { name: 'classical' },
    { name: 'country' },
    { name: 'dance' },
    { name: 'electronic' },
    { name: 'folk' },
    { name: 'hip-hop' },
    { name: 'indie' },
    { name: 'jazz' },
    { name: 'latin' },
    { name: 'metal' },
    { name: 'pop' },
    { name: 'punk' },
    { name: 'r&b' },
    { name: 'rap' },
    { name: 'reggae' },
    { name: 'rock' },
    { name: 'soul' },
    { name: 'soundtrack' },
    { name: 'world' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.links = [
      { path: '/', icon: 'home', title: 'Home' },
      { path: '/about', icon: 'info', title: 'About' },
      { path: '/contact', icon: 'email', title: 'Contact' },
    ];
  }

  toggleMenu() {
    this.toggle = !this.toggle;
  }
}
