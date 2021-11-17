import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalles/detalle/detalle.component';
import { LugarComponent } from './lugares/lugar/lugar.component';
const appRoutes : Routes = [
  {path:"",component:LugarComponent},
  {path:"lugares",component:LugarComponent},
  {path:"detalle",component:DetalleComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugarComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
