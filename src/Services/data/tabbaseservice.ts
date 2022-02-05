import { Itabcfam, IArtico,ITabciva } from './../../app/models/Articoli';
import { Injectable } from '@angular/core';
import { IArticoli } from 'src/app/models/Articoli';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TabBaseService {
  


  constructor(private httpcli:HttpClient) { }


  
  //#endregion
  getIvaAll =() =>{
    return this.httpcli.get<ITabciva[]>(`http://localhost:62001/archividibase/alliva`);
  } 

  getFamiglieAll =() =>{
    return this.httpcli.get<Itabcfam[]>(`http://localhost:62001/archividibase/allfamiglie`);
  } 

 

}
