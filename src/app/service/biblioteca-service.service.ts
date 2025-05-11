import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Livro{ // Padroniza os livros que serão armazenar os livros no vetor
  titulo:string
  autor:string[]
  ano:number
  cover_id:string
}

@Injectable({
  providedIn: 'root',
})

export class BibliotecaServiceService {

  private http = inject(HttpClient) // Injeta as funcionalidades do HttpClient

  constructor() { }

    getLivros(titulo:string):Observable<any>{
      return this.http.get<any>(`https://openlibrary.org/search.json?q=${encodeURIComponent(titulo)}`)
      // Método get para requisitar a API
  }
}
