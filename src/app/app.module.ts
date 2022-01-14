
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './pages/error/error.component';
import { CoreModule } from './core/core.module';
import { ArticoliComponent } from './pages/articoli/articoli.component';
import { GridArticoliComponent } from './pages/articoli/grid-articoli/grid-articoli.component';
import { ArticoliCardComponent } from './components/articoli-card/articoli-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    ArticoliComponent,
    GridArticoliComponent,
    ArticoliCardComponent    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
