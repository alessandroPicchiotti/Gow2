import { Component, Input, OnInit } from '@angular/core';
import { AuthappService } from 'src/Services/authapp.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  
  @Input()
  Titolo : string="";
  @Input()
  SottoTitolo : string="";
  @Input()
  Show : boolean = true;

  constructor(public BasicAuth: AuthappService) { }

  ngOnInit(): void {
  }

}
