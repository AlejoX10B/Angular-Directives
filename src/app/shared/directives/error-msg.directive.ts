import { ElementRef, Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private defaultParams = {
    color: 'red',
    message: 'Este campo es requerido'
  }

  @Input() set show(value: boolean) {
    this.er.nativeElement.style.display = (value) ? 'block' : 'none';
  }

  @Input() set color(value: string) {
    this.er.nativeElement.style.color = value;
  }

  @Input() set message(value: string) {
    this.er.nativeElement.innerText = value;
  }

  constructor(private er: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    const er = this.er.nativeElement;

    er.classList.add('form-text');
    er.innerText = this.defaultParams.message;
    er.style.color = this.defaultParams.color;
  }

}
