import { ModalComponent } from './../modal/modal.component';
import { NewsService } from './../news.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

  // inicializa os isLoading.. como true
  isLoadingResultsFromScience: boolean = true 
  isLoadingResultsFromTechnology: boolean = true  

  scienceNews = []
  technologyNews = []

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    // Inicializa as funções para popular os arrays
    this.listScienceNews()
    this.listTechnologyNews()
  }

  /* Atribui os valores buscados na API para o array scienceNews e define isLoadingResultsFromTechnology
  como false para ocultar a classe loading-spinner
  */ 
  listScienceNews(){
    this.newsService.getScienceArticles()
      .subscribe(res => {
        this.scienceNews = res
        this.isLoadingResultsFromScience = false
        }, err => {
        this.isLoadingResultsFromScience = false
        });
  }

  /* Atribui os valores buscados na API para o array technologyNews e define isLoadingResultsFromTechnology
    como false para ocultar a classe loading-spinner
  */ 
  listTechnologyNews(){
    this.newsService.getTechnologyArticles()
      .subscribe(res => {
        this.technologyNews = res
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
