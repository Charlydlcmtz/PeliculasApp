import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';
import { IconEmailComponent } from './components/icon-email/icon-email.component';
import { IconPasswordComponent } from './components/icon-password/icon-password.component';
import { IconUserComponent } from './components/icon-user/icon-user.component';
import { IconMobileComponent } from './components/icon-mobile/icon-mobile.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorsService } from './services/validators.service';



@NgModule({
  declarations: [
    HeaderMenuComponent,
    FooterMenuComponent,
    IconEmailComponent,
    IconPasswordComponent,
    IconUserComponent,
    IconMobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderMenuComponent,
    FooterMenuComponent,
    IconEmailComponent,
    IconPasswordComponent,
    IconUserComponent,
    IconMobileComponent,
    ValidatorsService,
  ]
})
export class SharedModule { }
