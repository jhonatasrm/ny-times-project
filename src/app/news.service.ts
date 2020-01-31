import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  scienceURL: string = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=science/response/docs&api-key=GLFaugbVyCdsj61jzn9wJkllgZhVeXRy'
  technologyURL: string = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=technology&api-key=GLFaugbVyCdsj61jzn9wJkllgZhVeXRy'

  constructor(private http: HttpClient) { }
  
  getScienceArticles(){
    return this.http.get<any[]>(`${this.scienceURL}`)
  }

  getTechnologyArticles(){
    return this.http.get<any[]>(`${this.technologyURL}`)
  }

}
