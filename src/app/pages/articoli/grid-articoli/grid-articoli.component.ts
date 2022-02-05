import { Component, OnInit } from '@angular/core';
import { IArticoli } from 'src/app/models/Articoli';
import { ArticoliService } from 'src/Services/data/articoli.service';

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent implements OnInit {

  articoli$ : IArticoli[] = [];
  errore : string="";
  
  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {
    //this.articoli$ = this.articoliService.getArticoli();
    //console.log(this.articoli$);
    this.articoliService.getArticoliByDescrizione("cola").subscribe({
      next: this.handleResponse.bind(this),
      error:this.handleError.bind(this)
    });
  }

  handleResponse = (response : IArticoli[]) =>{
    this.articoli$ = response;
  }

  handleError = (response : string) =>{
    this.errore   = response;
  }

  handleEdit = (codart : string) => {
    console.log("Cliccato tasto modifica del codice " + codart);
  }

  handleDelete = (codart : string) => {
    console.log("Cliccato tasto elimina del codice " + codart);

    this.articoli$.splice(this.articoli$.findIndex(x => x.codart === codart), 1);
    console.log(this.articoli$);

  }

}
