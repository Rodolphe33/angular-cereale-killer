import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BEER_LIST } from './models/beer-list.fake';

@Component({
  selector: 'kil-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  beers = signal(BEER_LIST);
}
