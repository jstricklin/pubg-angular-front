import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {

  constructor() { }

    time = moment;
    @Input() playerData: { };
    @Output ()playerSearch = new EventEmitter<{ shard: string, playerName: string }>();

    onPlayerSearch(shardName: string, name: string) {
        this.playerSearch.emit({
            shard: shardName,
            playerName: name,
        });
    }

  ngOnInit() {
  }

}
