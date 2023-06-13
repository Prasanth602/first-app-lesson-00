import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule
  ],
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img src="/assets/logo.svg" class="brand-logo" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <app-home></app-home>
    </section>
</main> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
