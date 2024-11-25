
import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'custom-button',
  standalone: true,
  templateUrl: './custom-button.component.html',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() disabled: boolean = false;
  @Input() type: 'outlined' | 'filled' | 'elevated' | 'tonal' | 'text' = 'filled';

  handleClick() {
    console.log('Button clicked!');
  }
}
