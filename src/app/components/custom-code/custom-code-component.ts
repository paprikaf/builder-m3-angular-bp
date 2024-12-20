import { Component, Input } from '@angular/core';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-custom-code',
  template: `
    <div [innerHTML]="code | safeHtml"></div>
  `,
  standalone: true,
  imports: [SafeHtmlPipe]
})
export class CustomCodeComponent {
  @Input() code: string = '';
  @Input() scriptsClientOnly: boolean = false;
}