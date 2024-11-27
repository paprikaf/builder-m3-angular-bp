import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content, BuilderContent, fetchOneEntry } from '@builder.io/sdk-angular';
import { CUSTOM_COMPONENTS } from '../builder-registry';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [Content, CommonModule],
  templateUrl: './landing-page.component.html',
})

export class LandingPageComponent {
  apiKey = environment.builderApiKey || 'bdd96eed1a2648e789e2e0d740aca175'; // Replace with your API key
  model = 'page';
  content: BuilderContent | null = null;
  customComponents = CUSTOM_COMPONENTS;

  // SEO metadata fields
  metaTitle: string = 'Default Title';
  metaDescription: string = 'Default Description';
  metaKeywords: string = ''; 
  canonicalUrl: string = '';
  metaImage: string = '';
  customScripts: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    // Subscribe to route data for Builder content
    this.route.data.subscribe((data: any) => {
      this.content = data.content;
      console.log('Builder Content:', this.content);

      if (this.content?.data) {
        // Apply metadata directly from the content
        this.applyContentMeta(this.content.data);
      } else {
        console.warn('No content data found. Skipping metadata update.');
      }

      if (this.content?.data?.['scripts']) {
        // If a reference to SEO tags exists, fetch the associated SEO data
        this.fetchSeoTags(this.content.data['scripts'].id);
      }
    });
  }

  private async fetchSeoTags(seoTagId: string): Promise<void> {
    try {
      const seoData = await fetchOneEntry({
        model: 'seo-tags',
        query: { id: seoTagId },
        apiKey: this.apiKey,
      });
      console.log('SEO Data:', seoData);
      if (seoData?.data) {
        this.applySeoTags(seoData.data);
      } else {
        console.warn('No SEO data found for the given tag ID.');
      }
    } catch (error) {
      console.error('Error fetching SEO tags:', error);
    }
  }

  private applyContentMeta(contentData: any): void {
    // Extract title and description from content data
    const contentTitle = contentData.title || this.metaTitle;
    const contentDescription = contentData.description || this.metaDescription;

    this.title.setTitle(contentTitle);
    this.meta.updateTag({ name: 'description', content: contentDescription });

    // Optional: Log for debugging
    console.log('Applied Content Metadata:', { contentTitle, contentDescription });
  }

  private applySeoTags(data: any): void {
    // Apply additional SEO tags (optional enhancement)
    this.metaKeywords = (data.metaKeywords || [])
      .map((keyword: { keyword: string }) => keyword.keyword)
      .join(', ');
    this.canonicalUrl = data.canonicalUrl || '';
    this.metaImage = data.metaImage || '';
    this.customScripts = data.customScripts || [];

    // Update document head tags
    this.meta.updateTag({ name: 'keywords', content: this.metaKeywords });
    this.meta.updateTag({ property: 'og:image', content: this.metaImage });

    // Set canonical URL
    this.setCanonicalUrl(this.canonicalUrl);

    // Inject custom scripts
    this.injectCustomScripts(this.customScripts);
  }

  private setCanonicalUrl(url: string): void {
    const existingLink: HTMLLinkElement | null = document.querySelector(
      'link[rel="canonical"]'
    );
    if (existingLink) {
      existingLink.href = url;
    } else if (url) {
      const link: HTMLLinkElement = document.createElement('link');
      link.rel = 'canonical';
      link.href = url;
      document.head.appendChild(link);
    }
  }

  private injectCustomScripts(scripts: any[]): void {
    if (scripts.length === 0) {
      console.warn('No custom scripts to inject.');
      return;
    }
    scripts.forEach((scriptObj) => {
      if (scriptObj?.scriptDetails?.script) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = scriptObj.scriptDetails.script;
        document.head.appendChild(script);
      } else {
        console.warn('Invalid script object:', scriptObj);
      }
    });
  }
}
