import { Component, Input } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-image-hero',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './image-hero.component.html',
  styleUrls: ['./image-hero.component.scss'],
})
export class ImageHeroComponent {
  @Input() title: string = 'SHOP ESSENTIALS';
  @Input() subTitle: string = '<p>Shoppable essentials for your every day life.</p>';
  @Input() buttonText: string = 'Shop Now';
  @Input() buttonLink: string = '/';
  @Input() backgroundImage: string =
    'https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F61c4f304ac9448b1ad741b83de17e48a';
  @Input() alignment: 'left' | 'center' | 'right' = 'center';
  @Input() makeFullBleed: boolean = false;

  constructor(private router: Router) {} // Inject Router

  get alignmentClasses(): string {
    return {
      left: 'align-left',
      center: 'align-center',
      right: 'align-right',
    }[this.alignment];
  }

  navigateTo(link: string): void {
    if (link.startsWith('http')) {
      // If the link is an external URL, open it in a new tab
      window.open(link, '_blank');
    } else {
      // Otherwise, navigate within the app
      this.router.navigate([link]);
    }
  }
}
