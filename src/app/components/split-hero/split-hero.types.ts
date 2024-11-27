import { EventEmitter } from '@angular/core';

export interface SplitHeroProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  buttonType: 'outlined' | 'filled' | 'elevated' | 'tonal' | 'text';
  onLearnMoreClick: EventEmitter<void>;
}
