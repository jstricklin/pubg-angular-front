import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
// import { Events } from '../shared/search-event.model';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {

    constructor() { console.log(); }

    time = moment;
    @Input() playerData: { };
    // e  = new Events();
    @Output () playerSearch = new EventEmitter<{ shard: string, playerName: string }>();
    @Output () matchSearch = new EventEmitter<{ shard: string, playerName: string, matchId: string }>();

    onPlayerSearch(shardName: string, name: string) {
        this.playerSearch.emit({
            shard: shardName,
            playerName: name,
        });
    }
    onMatchSearch(shardName: string, name: string, matchId: string) {
        this.matchSearch.emit({
            shard: shardName,
            playerName: name,
            matchId: matchId,
        });
        console.log(shardName, name, matchId);
    }

  ngOnInit() {
  }

}
