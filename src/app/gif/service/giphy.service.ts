import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private apiKey: string = 'C466M3LJdTdDZ2Er1KxCLNfcBHA6hcnL';
  private searchingGifUrl: string = 'https://api.giphy.com/v1/gifs/search';
  private trendingGifUrl: string = 'https://api.giphy.com/v1/gifs/trending';

  constructor(private http: HttpClient) { }

  searchGifs(query: string,limit: number): Observable<any> {
    const params = {
      api_key: environment.giphyApiKey,
      q: query,
      limit: limit.toString()
    };
    return this.http.get(this.searchingGifUrl, { params });
  }
  
  getTrandingGifs(limit: number){
    const params = {
      api_key: environment.giphyApiKey,
      limit: limit.toString()
    };
    return this.http.get(this.trendingGifUrl, { params });
  }
}
