import { Component, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input() counter!: WritableSignal<number>;

  increase() {
    this.counter.set(this.counter() + 1);
  }

  decrease() {
    this.counter.set(this.counter() - 1);
  }
}
