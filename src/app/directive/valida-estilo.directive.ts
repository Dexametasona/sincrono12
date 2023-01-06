import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[validaEstilo]'
})
export class ValidaEstiloDirective implements OnInit{

  constructor(private yo:ElementRef) {}
  @Input() estado!:boolean;

  @HostListener('change') validar(){
    if (this.estado){
      this.yo.nativeElement.style.color='green';
      this.yo.nativeElement.style.borderColor='green';
    }else{
      this.yo.nativeElement.style.color='red'
      this.yo.nativeElement.style.borderColor='red'
    }
  }
  ngOnInit(): void {
    this.validar()
  }

}
