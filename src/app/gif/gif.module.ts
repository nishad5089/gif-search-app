import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifSearchComponent } from './gif-search/gif-search.component';
import { FormsModule } from '@angular/forms'; // For ngModel
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { GifTrendingComponent } from './gif-trending/gif-trending.component';

@NgModule({
  declarations: [GifSearchComponent, GifTrendingComponent],
  imports: [
    CommonModule,
    FormsModule, 
    HttpClientModule, 
    NgxPaginationModule
  ],
  exports: [GifSearchComponent, GifTrendingComponent]
})
export class GifModule { }
