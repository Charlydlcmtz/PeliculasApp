import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';



@NgModule({
  declarations: [
    HeaderMenuComponent,
    FooterMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
