import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { HeaderComponent } from './../header/header.component';
import { FooterComponent } from './../footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ]

})
export class HomeModule { }
