import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FigmaImportsPage } from "./figma-imports/figma-imports.component";
import { Content } from "@builder.io/sdk-angular";
import { AppComponent } from "./app.component";
import { CustomButtonComponent } from "./components/custom-button/custom-button.component";
@NgModule({
    imports: [
        BrowserModule,
        AppComponent,
        CustomButtonComponent,
        Content
    ],
    providers: [],
    declarations: [
        FigmaImportsPage
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
