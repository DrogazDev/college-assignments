import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlahComponent } from './blah/blah.component';
import { LoopComponent } from './loop/loop.component';
import { GamesComponent } from './games/games.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BlahComponent,
    LoopComponent,
    GamesComponent
  ],
  template: `
  <main>
    <section class="content">
      <app-blah/>
      <app-loop/>
      <app-games/>
    </section>
  </main>
`,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'tour_of_heroes';
}
