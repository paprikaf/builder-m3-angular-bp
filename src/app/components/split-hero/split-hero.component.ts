import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { SplitHeroProps } from './split-hero.types';

@Component({
  selector: 'split-hero',
  templateUrl: './split-hero.component.html',
  styleUrls: ['./split-hero.component.scss'],
  standalone: true,
  imports: [CommonModule, CustomButtonComponent]
})
export class SplitHeroComponent implements SplitHeroProps {
  @Input() title: string = 'OUR COMMITMENT TO SUSTAINABILITY';
  @Input() description: string = "At Shopaholic, we believe fashion can be both stylish and eco-friendly. That's why we craft our clothing using sustainable materials like organic cotton, recycled fibers, and eco-friendly dyes. Our jeans are designed with the planet in mind—using water-saving technologies and ethical manufacturing processes.";
  @Input() buttonText: string = 'Learn More';
  @Input() imageSrc: string = 'https://cdn.builder.io/api/v1/image/assets/sustainability-hero.jpg';
  @Input() imageAlt: string = 'Sustainable fashion collection showcase';
  @Input() buttonType: 'outlined' | 'filled' | 'elevated' | 'tonal' | 'text' = 'outlined';
  @Output() onLearnMoreClick = new EventEmitter<void>();

  handleLearnMore(): void {
    this.onLearnMoreClick.emit();
  }
}