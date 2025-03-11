import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  number: number = 0;
  updateCounter(num: number) {
    this.number = num;
  }
  
}
