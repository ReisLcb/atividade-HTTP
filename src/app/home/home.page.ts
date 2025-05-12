import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms';
import { BibliotecaServiceService, Livro } from '../service/biblioteca-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, FormsModule, NgFor, NgIf],
})

export class HomePage {
  private bibbliotecaService  = inject(BibliotecaServiceService)

  livros:Livro[] = []
  titulo:string = ""

  async getLivro(titulo:string){

    this.bibbliotecaService.getLivros(titulo).subscribe({
      next: data => this.livros = data.docs,
      error: err => console.log("Este livro não foi encontrado", err)
    })

    this.titulo = ""
  }
}
