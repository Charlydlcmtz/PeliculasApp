import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasLayoutsComponent } from './layouts/peliculas-layouts/peliculas-layouts.component';
import { PeliculaListComponent } from './pages/pelicula-list/pelicula-list.component';
import { PeliculaAddComponent } from './pages/pelicula-add/pelicula-add.component';
import { PeliculaSearchComponent } from './pages/pelicula-search/pelicula-search.component';



@NgModule({
  declarations: [
    PeliculasLayoutsComponent,
    PeliculaListComponent,
    PeliculaAddComponent,
    PeliculaSearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PeliculasModule { }
