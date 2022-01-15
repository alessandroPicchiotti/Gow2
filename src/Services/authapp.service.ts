import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

   logOn = (userName : string,password:string) : boolean =>{

    var ret = (userName =="alp" && password == "ciaone") ? true : false;

    if( ret)
      sessionStorage.setItem("userName",userName);

    return ret;

  }
  getUserNname = (): string | null => sessionStorage.getItem("userName") ? sessionStorage.getItem("userName") : "";
  isLogged = () : boolean => sessionStorage.getItem("userName") !== null ?true:false;
  setLogout= () => sessionStorage.removeItem("userName");
}
