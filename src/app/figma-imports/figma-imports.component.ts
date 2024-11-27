import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Content, fetchOneEntry, getBuilderSearchParams, type BuilderContent } from "@builder.io/sdk-angular";
import { environment } from "../../environments/environment";
import { CUSTOM_COMPONENTS } from "../builder-registry";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-figma-imports",
  templateUrl: "./figma-imports.component.html",
  standalone: true,
  imports: [Content, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FigmaImportsPage {
  @Input() model = "figma-imports";

  apiKey = environment.builderApiKey;

  content: BuilderContent | null = null;

  customComponents = CUSTOM_COMPONENTS;

  async ngOnInit() {
    const searchParams = new URLSearchParams(window.location.search)

    const builderContent = await fetchOneEntry({
      model: this.model,
      apiKey: this.apiKey,
      options: getBuilderSearchParams(searchParams),
    });
    console.log('JELLON', builderContent)
    
    if (builderContent) {
      this.content = builderContent;
    }
    console.log('Builder Content:', this.content, this.apiKey, this.model, this.customComponents);
  }
}
