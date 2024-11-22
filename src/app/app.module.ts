import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponent // Add components here
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
