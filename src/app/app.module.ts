import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, theRoutingPathway } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuryaComponent } from './surya/surya.component';
import { SummaComponent } from './summa/summa.component';

@NgModule({
  declarations: [
    AppComponent,
    SuryaComponent,
    SummaComponent,
    theRoutingPathway
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
