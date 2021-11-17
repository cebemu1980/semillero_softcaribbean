import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'proysemille';
  lugares:any=[
    {plan:'pagado',cercania:1,distancia:1,active:true,nombre:"Estanco"},
    {plan:'gratuito',cercania:2,distancia:3,active:true,nombre:"Centro comercial"},
    {plan:'pagado',cercania:3,distancia:5,active:false,nombre:"Floristeria"}
  ];

}
