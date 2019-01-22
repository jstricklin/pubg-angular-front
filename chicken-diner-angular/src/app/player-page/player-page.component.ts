import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import * as dmgCauserName from '../../assets/utils/dictionaries/telemetry/damageCauserName.json';
import * as mapName from '../../assets/utils/dictionaries/telemetry/mapName.json';
import * as itemId from '../../assets/utils/dictionaries/telemetry/item/itemId.json';
import * as dmgCategory from '../../assets/utils/dictionaries/telemetry/damageTypeCategory.json';
// import { Events } from '../shared/search-event.model';
const miramarBG = '../../assets/images/miramar-bg-01.png';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {

    constructor() {  }

    parseMapName = mapName;
    parseWeaponName = dmgCauserName;
    time = moment;
    @Input() selectedLink = '';
    @Input() matchId = '';
    @Input() playerData: { };
    @Output() playerSearch = new EventEmitter<{ shard: string, playerName: string }>();
    @Output() matchSearch = new EventEmitter<{ shard: string, playerName: string, matchId: string }>();
    @Output() linkClick = new EventEmitter<string>();

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
    }
    onLinkClick(route) {
        this.linkClick.emit(route);
    }

  ngOnInit() {
  }

}
