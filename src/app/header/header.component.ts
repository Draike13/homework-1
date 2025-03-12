import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  header = 'intersting header';
  state = true;

  toggle() {
    this.state = !this.state;
  }

  change() {
    this.header = 'Check this out';
  }
}
