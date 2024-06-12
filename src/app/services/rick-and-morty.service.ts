import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private baseUrl = 'https://rickandmortyapi.com/api'
  
  
  constructor(private http: HttpClient) { }

  obtenerPersonajes(){
    return this.http.get(this.baseUrl + "/character")
  }

  obtenerLocaciones(){
    return this.http.get(this.baseUrl + "/location")
  }

  obtenerEpisodios(){
    return this.http.get(this.baseUrl + "/episode")
  }
}

