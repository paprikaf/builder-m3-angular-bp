import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { landingPageResolver } from './landing-page/landing-page.resolver';

export const routes: Routes = [
  {
    path: 'test', // For testing purposes
    component: LandingPageComponent,
    resolve: { content: landingPageResolver }, // Use resolver to fetch content dynamically
  },
  {
    path: '**', // Wildcard route for all unmatched paths
    component: LandingPageComponent,
    resolve: { content: landingPageResolver }, // Fallback to LandingPageComponent
  },
];
