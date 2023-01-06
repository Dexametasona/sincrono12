import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[validaEstilo]'
})
export class ValidaEstiloDirective {

  constructor(private yo:ElementRef) { }
  
  @HostListener('valida') validar(){
    this.yo.nativeElement.style.backgroundColor='blue'
  }

}
