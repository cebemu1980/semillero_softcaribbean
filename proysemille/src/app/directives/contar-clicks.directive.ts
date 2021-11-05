import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: 'li[appContarClicks]'
})
export class ContarClicksDirective {
  clickN=0;
  @HostBinding('style.opacity') opacity:number=.1;
  @HostListener('click',['$event.target']) onClick(){
    console.log('a',"Numero de clicks:", this.clickN++);
    this.opacity += .1;
    
  };

  constructor() { }

}
