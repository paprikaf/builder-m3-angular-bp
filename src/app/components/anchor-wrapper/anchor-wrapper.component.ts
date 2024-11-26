import { Component, Input } from '@angular/core';
import { Blocks } from '@builder.io/sdk-angular';

@Component({
  selector: 'app-anchor-wrapper',
  standalone: true,
  templateUrl: './anchor-wrapper.component.html',
  styleUrls: ['./anchor-wrapper.component.scss'],
  imports: [Blocks],
})
export class AnchorWrapperComponent {
  @Input() anchorId: string = 'default-anchor'; // Anchor ID for the link
  @Input() blocks: any[] = []; // Child blocks to render (use `any[]` for flexibility)
}
