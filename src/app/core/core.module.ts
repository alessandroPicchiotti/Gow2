import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NotificationsComponent } from './notifications/notifications.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    JumbotronComponent
  ]
})
export class CoreModule { }
