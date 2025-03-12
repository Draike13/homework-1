import { Component, signal, WritableSignal } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CounterComponent } from './counter/counter.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, CounterComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  counter: WritableSignal<number> = signal(0);
  title = 'homework-1';
}
