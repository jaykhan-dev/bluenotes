import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Links } from 'src/app/models/links';
import { Tags } from 'src/app/models/tags';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'bluenotes';
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
      // { path: '/', icon: 'home', title: 'Home' },
      { path: '/relays', icon: 'dns', title: 'Relays' },
      { path: '/people', icon: 'account_circle', title: 'People' },
      { path: '/saved', icon: 'favorite_border', title: 'Saved' },
      { path: '/about', icon: 'face', title: 'About' },
      // { path: '/maeve', icon: '', title: 'Maeve (AI Assistant)' },
      // { path: '/conduct', icon: 'email', title: 'Code of Conduct' },
    ];
  }

  toggleMenu() {
    this.toggle = !this.toggle;
  }
}
