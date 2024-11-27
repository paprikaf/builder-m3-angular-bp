import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { landingPageResolver } from './landing-page/landing-page.resolver';

import { FigmaImportsPage } from "./figma-imports/figma-imports.component";

export const routes: Routes = [{
  path: 'test', // For testing purposes
  component: LandingPageComponent,
  resolve: { content: landingPageResolver }, // Use resolver to fetch content dynamically
}, 
{
  path: 'figma-imports',
  component: FigmaImportsPage,
},
{
  path: '**', // Wildcard route for all unmatched paths
  component: LandingPageComponent,
  resolve: { content: landingPageResolver }, // Fallback to LandingPageComponent
}, ];