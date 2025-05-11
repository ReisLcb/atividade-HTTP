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
  private bibbliotecaService  = inject(BibliotecaServiceService) // Injeta as funcionalidades do serviço
  livros:Livro[] = [] // Define um vetor vazio que conterá os livros obtidos em cada requisição
  titulo:string = "" // Título digitado no ion-input pelo usuário

  async getLivro(titulo:string|null){
    this.bibbliotecaService.getLivros(this.titulo).subscribe({ // retorna um observable e chama o método .subscribe() para obter um valor
      next: data =>{ // data é o valor que toda requisição retorna, é o valor que contém as informações da API que procuramos
        data.docs.forEach((item:any) =>{ // a propriedade 'docs' contém o vetor dos livros
          if(item.title.toLowerCase() == titulo?.toLowerCase()) this.livros.push({titulo: item.title, autor:item.author_name[0], ano: item.first_publish_year, cover_id: item.cover_i})
            // Adiciona o livro ao vetor caso encontrar um título igual ao dado pelo usuário
        })
      },
      error: err => console.log("Este livro não foi encontrado", err)
    })
    this.titulo = ""
    console.log(this.livros) // Mostra-nos os livros que estão no vetor ao final da requisição
  }
}
