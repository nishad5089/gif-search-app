import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GiphyService } from '../service/giphy.service';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html'
})
export class GifSearchComponent implements OnInit {
  searchQuery: string = '';

  @Output() searchResults: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() showTrending: EventEmitter<void> = new EventEmitter<void>();

  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void { }

  search(): void {
    if (this.searchQuery.trim() === '') {
      this.showTrending.emit();
      return;
    }

    this.giphyService.searchGifs(this.searchQuery, 50).subscribe(
      (response: any) => {
        this.searchResults.emit(response.data);
      },
      (error) => {
        console.error('Error fetching GIFs:', error);
      }
    );
  }
}
