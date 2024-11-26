import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content, BuilderContent  } from '@builder.io/sdk-angular';
import { CUSTOM_COMPONENTS } from '../builder-registry'; 

@Component({
  selector: 'app-landing-page',
  standalone: true, // Ensure standalone is correctly set
  imports: [Content, CommonModule],
  template: `
    <h1>Landing Page Loaded</h1>
    <ng-container *ngIf="content; else notFound">
      <builder-content
        [model]="'page'"
        [content]="content"
        [apiKey]="apiKey"
        [customComponents]="CUSTOM_COMPONENTS">
      </builder-content>
    </ng-container>
    <ng-template #notFound>
      <div>404 - Content not found</div>
    </ng-template>
  `,
})
export class LandingPageComponent {
  apiKey = 'bdd96eed1a2648e789e2e0d740aca175'; // Replace with your API key
  content: BuilderContent | null = null;
  CUSTOM_COMPONENTS = CUSTOM_COMPONENTS;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.content = data.content;
      console.log('Builder Content:', this.content);
    });
  }
}

