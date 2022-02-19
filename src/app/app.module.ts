import { NotificationsComponent } from './core/notifications/notifications.component';

import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './pages/error/error.component';
import { CoreModule } from './core/core.module';
import { GridArticoliComponent } from './pages/articoli/grid-articoli/grid-articoli.component';
import { ArticoliCardComponent } from './components/articoli-card/articoli-card.component';
import { ListArticoliComponent } from './pages/articoli/list-articoli/list-articoli.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { GestArticoliComponent } from './pages/articoli/gest-articoli/gest-articoli.component';
import { AuthInterceptorService } from 'src/Services/interceptors/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    ListArticoliComponent,
    GridArticoliComponent,
    ArticoliCardComponent,
    ListArticoliComponent,
    GestArticoliComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
