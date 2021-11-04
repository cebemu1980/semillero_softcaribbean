import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proysemille';
  lugares:any=[
    {plan:'pagado',cercania:1,distancia:1,active:true,nombre:"Estanco"},
    {plan:'gratuito',cercania:2,distancia:3,active:true,nombre:"Centro comercial"},
    {plan:'pagado',cercania:3,distancia:5,active:false,nombre:"Floristeria"}
  ];
  
}
