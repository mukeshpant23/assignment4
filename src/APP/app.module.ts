import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { DirectivesComponent } from "./directives/directives.component";
import { CreditCardMaskPipe } from "./common_services/credit-card-mask";
import { HighlightDirective } from "./common_services/highlight.directive";
import { ColorChangeDirective } from "./common_services/color-change";
import { RemoveDirective } from "./common_services/remove.directive";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    ReactiveFormsComponent,
    CreditCardMaskPipe,
    HighlightDirective,
    RemoveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
