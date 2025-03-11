import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaRoutingModule } from './pelicula-routing.module';
import { PeliculaLayoutComponent } from './layouts/pelicula-layout/pelicula-layout.component';
import { PeliculaListComponent } from './pages/pelicula-list/pelicula-list.component';
import { PeliculaAddComponent } from './pages/pelicula-add/pelicula-add.component';
import { PeliculaSearchComponent } from './pages/pelicula-search/pelicula-search.component';
import { PipesPipe } from './pipes.pipe';
import { PeliculaImagePipe } from './pipes/pelicula-image.pipe';


@NgModule({
  declarations: [
    PeliculaLayoutComponent,
    PeliculaListComponent,
    PeliculaAddComponent,
    PeliculaSearchComponent,
    PipesPipe,
    PeliculaImagePipe
  ],
  imports: [
    CommonModule,
    PeliculaRoutingModule
  ]
})
export class PeliculaModule { }
