import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FeatureCardProps,
  FeatureItem,
  DEFAULT_FEATURES,
} from "./feature-card.types";

@Component({
  selector: "app-feature-card",
  templateUrl: "./feature-card.component.html",
  styleUrls: ["./feature-card.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class FeatureCardComponent implements FeatureCardProps {
  @Input() features: FeatureItem[] = DEFAULT_FEATURES;
  @Input() titleText: string = "WHAT'S DIFFERENT ABOUT SHOPAHOLIC";
  @Input() onFeatureClick: (id: string) => void = (id: string) =>
    console.log(`Feature clicked: ${id}`);

  handleFeatureClick(id: string): void {
    this.onFeatureClick(id);
  }
}
