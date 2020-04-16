import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalComponent } from '../../shared/components/ny_modal/ny_modal.component';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'ny-news',
  templateUrl: './news.component.html'
})

export class NewsComponent implements OnInit {

  // inicializa os isLoading.. como true
  isLoadingResultsFromScience: boolean = true 
  isLoadingResultsFromTechnology: boolean = true  

  scienceNews =  new Array()
  technologyNews = new Array()

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    // Inicializa as funções para popular os arrays
    this.listScienceNews()
    this.listTechnologyNews()
  }

  /* Atribui os valores buscados na API para o array scienceNews e define isLoadingResultsFromTechnology
  como false para ocultar a classe spinner
  */ 
  listScienceNews(){
    this.newsService.getNewsScience()
      .subscribe(res => {
        this.scienceNews = res['response']
        this.isLoadingResultsFromScience = false
      }, err => {
      this.isLoadingResultsFromScience = false
    });
  }

  /* Atribui os valores buscados na API para o array technologyNews e define isLoadingResultsFromTechnology
  como false para ocultar a classe spinner
  */ 
 listTechnologyNews(){
    this.newsService.getNewsTechnology()
      .subscribe(res => {
        this.technologyNews = res['response']
        this.isLoadingResultsFromTechnology = false
       }, err => {
       this.isLoadingResultsFromTechnology = false
    });
  }

  // envia para o modal.component.ts as informações necessárias para apresentar no modal
  @ViewChild(ModalComponent, { static: false }) modal: ModalComponent
  openModal(title, description, author, address) {
    this.modal.open(title, description, author, address)
  }
}
