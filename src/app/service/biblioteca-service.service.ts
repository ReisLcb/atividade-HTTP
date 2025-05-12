import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Livro{
  title:string
  author_name:string[]
  first_publish_year:number
  cover_i:string
}

@Injectable({
  providedIn: 'root',
})

export class BibliotecaServiceService {

  private http = inject(HttpClient)
  livros:Livro[] = []

  constructor() { }

    getLivros(titulo:string):Observable<any>{
      return this.http.get<any>(`https://openlibrary.org/search.json?q=${encodeURIComponent(titulo)}`)
  }
}
