import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  // variáveis necessárias para utilizar no modal
  title: string
  description: string
  author: string
  address: string

  private modalRef: NgbModalRef
  @ViewChild("modal", { static: false }) child: any

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  /* pega as informações enviadas pelo news.component.ts ao clicar no "Read more..." e as armazena 
  nas variáveis para apresentar no modal 
  */
  open(title: string, description: string, author: string, address: string) {
    this.title = title
    this.description = description
    this.author = author
    this.address = address
    this.modalRef = this.modalService.open(this.child)
  }
}