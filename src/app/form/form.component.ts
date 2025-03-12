import { Component, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Input({ required: true }) counter!: WritableSignal<number>;

  updateCounter(number: number) {
    console.log('updating now', number);
    this.counter.set(number);
  }
}
