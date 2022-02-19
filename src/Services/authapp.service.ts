import { environment } from './../environments/environment';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiMsg } from 'src/app/models/ApiMag';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  server : string = environment.server;
  port : string = environment.port;
  
  constructor(private httpClient : HttpClient) { }

  
   

  autenticaService(UserId: string, Password: string) {

    //let userName = "administrator";
    //let password = "adminadmin";
    console.log("ecco perchè");
    //let Author ="Basic " + window.btoa(userName+ ":" + password);

    let AuthString : string = "Basic " + window.btoa(UserId + ":" + Password);

    let headers = new HttpHeaders(
      {Authorization:  AuthString}
    )

    return this.httpClient.get<IApiMsg>(
      `http://${this.server}:${this.port}/login`, {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem("userName", UserId);
            sessionStorage.setItem("AuthToken", AuthString);
            return data;
          }
        )
      );

  }

  getUserNname = (): string | null => sessionStorage.getItem("userName") ? sessionStorage.getItem("userName") : "";
  isLogged = () : boolean => sessionStorage.getItem("userName") !== null ?true:false;
  setLogout= () =>
  { 
      sessionStorage.removeItem("userName");
      sessionStorage.removeItem("AuthToken");
  }
}
