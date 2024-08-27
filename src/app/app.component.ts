import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BEER_LIST } from './models/beer-list.fake';

@Component({
  selector: 'kil-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = signal('Triple Karmeliet');
  life = signal(8);
  force = computed(() => {
    if (this.life() <= 6) {
      return 'Douce';
    }
    if (this.life() >= 12) {
      return 'Trés forte';
    }
    return 'Forte';
    });
  imageSrc = signal('https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqugzfiwWbTNmOBcECBiRXWdZj2KSMjZDmem1ihhj1w6iSMDiBP3jOZob66yUyiWrvBhumStacPdgqAOcWq4cu8KwMbmfOhZbMsIs34YutQ8Umn6XdnA');
  beers = signal(BEER_LIST);

  incrementLife() {
    this.life.update(n => n + 1);
  }

  decrementLife() {
    this.life.update(n => n - 1);
  }
}
