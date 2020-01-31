import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  API_KEY = 'GLFaugbVyCdsj61jzn9wJkllgZhVeXRy'
  
  constructor(private http: HttpClient) {}

  getNewsScience(){
    return this.http.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=science&api-key=${ this.API_KEY }`)
  }

  getNewsTechnology(){
    return this.http.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=technology&api-key=${ this.API_KEY }`)
  }

}
