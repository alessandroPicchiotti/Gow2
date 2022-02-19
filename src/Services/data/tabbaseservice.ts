import { Itabcfam, IArtico,ITabciva } from './../../app/models/Articoli';
import { Injectable } from '@angular/core';
import { IArticoli } from 'src/app/models/Articoli';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TabBaseService {
  
  server : string = environment.server;
  port : string = environment.port;

  constructor(private httpcli:HttpClient) { }


  
  //#endregion
  getIvaAll =() =>{
    return this.httpcli.get<ITabciva[]>(`http://${this.server}:${this.port}/archividibase/alliva`);
  } 

  getFamiglieAll =() =>{
    return this.httpcli.get<Itabcfam[]>(`http://${this.server}:${this.port}/archividibase/allfamiglie`);
  } 

 

}
