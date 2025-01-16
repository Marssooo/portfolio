import { Component, input } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  test = input('', {alias: 'q'});

  ngOnInit(): void {
    console.log(this.test())
  }
}
