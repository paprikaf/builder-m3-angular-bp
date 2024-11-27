import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { builderDevTools } from "@builder.io/dev-tools/angular";
import { routes } from "./app/app.routes";
bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
builderDevTools().catch((err: Error) => console.error("Error starting dev tools:", err));
