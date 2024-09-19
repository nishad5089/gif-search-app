import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../service/giphy.service';

@Component({
  selector: 'app-gif-trending',
  templateUrl: './gif-trending.component.html'
})
export class GifTrendingComponent implements OnInit {
  gifs: any[] = [];
  errorMessage: string = '';

  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {
    this.trandingGif();
  }

  trandingGif(): void {
    this.giphyService.getTrandingGifs(50).subscribe(
      (response: any) => {
        this.gifs = response.data;
        console.log(this.gifs);
        
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error fetching GIFs:', error);
        this.errorMessage = 'Error fetching GIFs';
      }
    );
  }
  
  onSearchResults(gifs: any[]): void {
    this.gifs = gifs;
  }
}
