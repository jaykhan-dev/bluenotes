import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Links } from 'src/app/models/links';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  toggle: boolean = false;

  links: Links[] = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/about', icon: 'info', title: 'About' },
    { path: '/contact', icon: 'email', title: 'Contact' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggleMenu() {
    this.toggle = !this.toggle;
  }
}
