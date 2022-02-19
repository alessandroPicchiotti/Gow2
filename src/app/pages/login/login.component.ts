import { AuthappService } from '../../../Services/authapp.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string = '';
  password : string ='';
  msgInfo : string='';
  Titolo : string="Accedi o registrati"; 
  SottoTitolo : string="Visualizzarai o potrai acquistare la nostra vasta gamma di prodotti";
  
 
  constructor(private navi: Router, public BasicAuth : AuthappService) { }

  ngOnInit(): void {
  }

  gestAuth = (): void => {
    console.log(this.userName);

    this.BasicAuth.autenticaService(this.userName, this.password).subscribe({
      next: (response) => {
        console.log(response);

        //this.autenticato = true;
        //this.route.navigate(['welcome', this.userName]);
      },
      error: (error) => {
        console.log(error.error);
        this.msgInfo = error.error;
      }
    });
  }

}
