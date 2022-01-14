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

  constructor(private navi: Router) { }

  ngOnInit(): void {
  }

  logon(){
    this.navi.navigate(["login"]);
    this.msgInfo ="Benvenuto " + this.userName ;
  }

}
