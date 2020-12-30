import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]

})
export class HomeModule { }
