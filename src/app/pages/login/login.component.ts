import { AuthappService } from '../../../Services/authapp.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string = 'alp';
  password : string ='';
  msgInfo : string='';
  Titolo : string="Accedi o registrati"; 
  SottoTitolo : string="Visualizzarai o potrai acquistare la nostra vasta gamma di prodotti";
  
 
  constructor(private navi: Router, public auth : AuthappService) { }

  ngOnInit(): void {
  }

  logon(){
    //this.navi.navigate(["login"]);
    if( this.auth.logOn(this.userName,this.password))
    {
      this.msgInfo ="Benvenuto " + this.userName ;
      
    }
    else  
    {
      this.msgInfo ="Login non valido";
      
    }
  }

}
