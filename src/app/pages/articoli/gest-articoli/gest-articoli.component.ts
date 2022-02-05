import { IApiMsg } from './../../../models/ApiMag';
import { TabBaseService } from './../../../../Services/data/tabbaseservice';
import { ArticoliService } from './../../../../Services/data/articoli.service';
import { IArtico, ITabciva, Itabcfam } from './../../../models/Articoli';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-gest-articoli',
  templateUrl: './gest-articoli.component.html',
  styleUrls: ['./gest-articoli.component.css']
})
export class GestArticoliComponent implements OnInit {

  title : string = "Modifica Articoli";

  CodArt: string = '';

  articolo: IArtico ={
    ar_codart : "",
    ar_descr:"",
    ar_unmis:"",
    ar_codtipa:0,
    ar_pesolor:0.0,
    ar_pesonet:0.0,
    ar_confez2:"",
    codditt: "",
    ar_famprod : "",
    ar_datins : new Date(),
    ar_codiva:0,
    
  };
  errore:string = "";
  tabciva: ITabciva[] = [];//Inizializzazione
  tabcfam: Itabcfam[] =[];
  apiMsg! : IApiMsg ;
  conferma : string ="";
  

  constructor( private routelink : ActivatedRoute,private articoliService : ArticoliService, private tabbaseservice : TabBaseService) { }

  ngOnInit(): void {
   
    //console.log(this.routelink.snapshot.params['codart'])
    this.CodArt = this.routelink.snapshot.params['codart'];
    this.apriArticolo(this.CodArt);
    this.getAllIva();
    this.getAllFamiglie();
  }

  apriArticolo =(codart:string) =>{
    this.articoliService.getArticoloByCodice(codart).subscribe({
      next: this.handleResponse.bind(this),
      error:this.handleError.bind(this)
    });
  }
  

  handleResponse = (response : IArtico) =>{
    this.articolo = response;
  }
  handleError = (response : string) =>{
    this.errore   = response;
  }

  getAllIva =() =>{
    this.tabbaseservice.getIvaAll().subscribe( response =>{
      this.tabciva = response;
    });
  }
  getAllFamiglie =() =>{
      this.tabbaseservice.getFamiglieAll().subscribe( response =>{
        this.tabcfam = response;
      });    
  }

  Salva = ()=>{
    console.log(this.articolo);

    //this.articolo.Iva.tb_codciva = this.articolo.ar_codiva;
    this.articoliService.updateArticolo(this.articolo).subscribe({
      next:(response) =>{
        this.apiMsg = response;
        console.log(this.apiMsg.descrizione);
        this.conferma = this.apiMsg.descrizione;
      },
      error:(error) =>{ 
        //this.handleError.bind(this);
        //this.apiMsg = error;
        console.log(error.error);
        this.errore = error.error;
      }

    })
    
  }

}