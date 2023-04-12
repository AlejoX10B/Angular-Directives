import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent {

  message: string = 'Solo un mensaje';
  color: string = 'red';

  form: FormGroup = this.fb.group({
    name: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {
  }

  changeMessage() {
    this.message = 'El mensaje ha cambiado';
  }

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
  }

  checkField(field: string): boolean {
    return this.form.get(field)?.invalid || false;
  }

}
