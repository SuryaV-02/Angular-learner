import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, theRoutingPathway } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuryaComponent } from './surya/surya.component';
import { SummaComponent } from './summa/summa.component';
import { PhantomComponent } from './phantom/phantom.component';

import { FormsModule } from '@angular/forms';
import { TwoWayBindingCompComponent } from './two-way-binding-comp/two-way-binding-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SuryaComponent,
    SummaComponent,
    theRoutingPathway,
    PhantomComponent,
    TwoWayBindingCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
