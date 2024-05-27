import { Component } from '@angular/core';
import { Battle } from '../battle';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [NgFor],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  battle1: Battle = {
    id: 1,
    name: "CSGO",
    team1: "Team 1",
    team2: "Team2"
  }
  battle2: Battle = {
    id: 2,
    name: "Rocket League",
    team1: "Team 3",
    team2: "Team 4"
  }
  battle3: Battle = {
    id: 3,
    name: "CS2",
    team1: "Team 5",
    team2: "Team 6"
  }
  battle4: Battle = {
    id: 4,
    name: "Rainbow Six Siege",
    team1: "Team 7",
    team2: "Team 8"
  }
  battle5: Battle = {
    id: 5,
    name: "CSGO",
    team1: "Team 9",
    team2: "Team 10"
  }

  battles: Battle[] = [this.battle1, this.battle2, this.battle3, this.battle4, this.battle5];
}
