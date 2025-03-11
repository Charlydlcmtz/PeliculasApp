import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioLayoutComponent } from './layouts/usuario-layout/usuario-layout.component';
import { UsuarioAddComponent } from './pages/usuario-add/usuario-add.component';
import { UsuarioListComponent } from './pages/usuario-list/usuario-list.component';
import { UsuarioSearchComponent } from './pages/usuario-search/usuario-search.component';
import { UsuarioImagePipe } from './pipes/usuario-image.pipe';


@NgModule({
  declarations: [
    UsuarioLayoutComponent,
    UsuarioAddComponent,
    UsuarioListComponent,
    UsuarioSearchComponent,
    UsuarioImagePipe
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
