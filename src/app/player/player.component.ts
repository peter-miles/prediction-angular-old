import { Component, OnInit } from '@angular/core';
import { Player } from '../interfaces/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}
  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService
      .getPlayers()
      .subscribe((players) => (this.players = players));
  }
}
