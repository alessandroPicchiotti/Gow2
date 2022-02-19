import { NgxPaginationModule } from 'ngx-pagination';
import { AuthappService } from './../../../../Services/authapp.service';
import { Component, OnInit } from '@angular/core';
import { IArticoli } from 'src/app/models/Articoli';
import { ArticoliService } from 'src/Services/data/articoli.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-list-articoli',
  templateUrl: './list-articoli.component.html',
  styleUrls: ['./list-articoli.component.css']
})
export class ListArticoliComponent implements OnInit {

  articoli$ : IArticoli[] = [];
  errore : string="";
  righe  : number=10;
  pagina: number=1;
  filter : string="";

  //articoli: IArticoli[]  = []
  constructor(private articoliService: ArticoliService, public auth : AuthappService, private route : Router) { }

  ngOnInit(): void {
      this.getArticoliByDescrizione("");
  }

  handleKeyUp =() =>{
    this.pagina=1;
    this.articoli$=[];
    this.errore ="";
    console.log("ecco il filtro: -" + this.filter);
    
    this.getArticoliByDescrizione(this.filter);
  }

  getArticoliByDescrizione = (descrizione : string) =>{
    this.articoliService.getArticoliByDescrizione(descrizione).subscribe({
      next: this.handleResponse.bind(this),
      error:this.handleError.bind(this)
    });
  }
  
  handleResponse = (response : IArticoli[]) =>{
    this.articoli$ = response;
  }

  handleError = (response : any) =>{
    
    this.errore   = response.statusText;
  }

  modifica = (codart : string) =>{
    //console.log("modifica" + codart)
    this.route.navigate(["articoli/gest",codart]);
  }
  Nuovo = () =>{
    console.log("aggiungo l'articolo");
    this.route.navigate(["articoli/gest"]);
  }
}
