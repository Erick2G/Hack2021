import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header', //el nombre a nivel html
  templateUrl: './header.component.html',//donde está el html
  styleUrls: ['./header.component.css']//el css
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {//inicializaador
  }

}
