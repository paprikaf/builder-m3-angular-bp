import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    CustomButtonComponent,
  ],
  providers: [],
})
export class AppModule {}