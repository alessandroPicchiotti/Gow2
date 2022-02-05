import { IApiMsg } from './../../app/models/ApiMag';
import { IArtico, ITabciva } from './../../app/models/Articoli';
import { Injectable } from '@angular/core';
import { IArticoli } from 'src/app/models/Articoli';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ArticoliService {
  

  /*
  articoli: IArticoli[]  = [
    {codart : '014600301', descrizione : 'BARILLA FARINA 1 KG', um : 'PZ', pzcart : 24, peso : 1, prezzo : 1.09, active : true, data : new Date(), imageUrl: 'assets/images/prodotti/014600301.jpg'},
    {codart : "013500121", descrizione : "BARILLA PASTA GR.500 N.70 1/2 PENNE", um : "PZ", pzcart : 30, peso : 0.5, prezzo : 1.3, active : true, data : new Date(), imageUrl: 'assets/images/prodotti/013500121.jpg'},
    {codart : "014649001", descrizione : "BARILLA PANNE RIGATE 500 GR", um : "PZ", pzcart : 12, peso : 0.5, prezzo : 0.89, active : true, data : new Date(), imageUrl: 'assets/images/prodotti/014649001.jpg'},
    {codart : "007686402", descrizione : "FINDUS FIOR DI NASELLO 300 GR", um : "PZ", pzcart : 8, peso : 0.3, prezzo : 6.46, active : true, data : new Date(), imageUrl: 'assets/images/prodotti/007686402.jpg'},
    {codart : "057549001", descrizione : "FINDUS CROCCOLE 400 GR", um : "PZ", pzcart : 12, peso : 0.4, prezzo : 5.97, active : true, data : new Date(), imageUrl: 'assets/images/prodotti/057549001.jpg'},

  ]

  getArticoliByCode = (codart: string) : IArticoli => {

    const index = this.articoli.findIndex(articoli => articoli.codart === codart);
    return this.articoli[index];

  }
  */

  constructor(private httpcli:HttpClient) { }


  
  //#region   "Call WS"  
  getArticoliByDescrizione = ( descrizione:string ) =>{
    if(descrizione === "" || !descrizione) 
    {
      return this.httpcli.get<IArticoli[]>(`http://localhost:62001/articoli/gettutti`);
    }
    else
    {
        return this.httpcli.get<IArticoli[]>(`http://localhost:62001/articoli/getbyDescr/${descrizione}`)
        .pipe(
          map( response => {
              response.forEach( item =>item.tipo = this.getTipoArticoloDex( item.tipo));
              return response;
          })
        );
      }
    
  }

  getTipoArticoloDex = (tipo: string): string =>{
    console.log(tipo);
    if( tipo == "1")
      return "Attivo";
    else
      return "non attivo"
  }

  getArticoloByCodice = (codiceArticolo : string) =>{
    return this.httpcli.get<IArtico>(`http://localhost:62001/articoli/getbyCodice/${codiceArticolo}`);
  }
  
  updateArticolo = (articolo: IArtico) =>{
    return this.httpcli.put<IApiMsg>(`http://localhost:62001/articoli/Modifica/`,articolo);
 }

}
