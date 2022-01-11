import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string = 'alp';

  constructor() { }

  ngOnInit(): void {
  }

  showInConsolle(){
    console.log(this.userName);
  }

}
