
import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/elevated-button.js';
import '@material/web/button/text-button.js';

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
  ngOnInit() {
    console.log('Button type:', this.type);
  }
  handleClick() {
    console.log('Button clicked!');
  }
}
