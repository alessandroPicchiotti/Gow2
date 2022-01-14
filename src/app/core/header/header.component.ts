import { AuthappService } from './../../../Services/authapp.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(public auth : AuthappService) { }

  ngOnInit(): void {
  }

}
