import { CommonModule } from '@angular/common';
import { Component, Input   } from '@angular/core';

@Component({
  selector: 'text-hero',
  templateUrl: './text-hero.component.html',
  styleUrls: ['./text-hero.styles.scss'],
  standalone: true, // Standalone component
  imports: [CommonModule],
})
export class TextHeroComponent {
  @Input() title: string = '';
  @Input() subTitle?: string;
}
