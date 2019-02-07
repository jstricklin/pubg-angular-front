import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { PlayerData } from '../shared/player-data.model';
import { Router } from '@angular/router';
import * as moment from 'moment';
import * as dmgCauserName from '../../assets/utils/dictionaries/telemetry/damageCauserName.json';
import * as mapName from '../../assets/utils/dictionaries/telemetry/mapName.json';
import * as itemId from '../../assets/utils/dictionaries/telemetry/item/itemId.json';
import * as dmgCategory from '../../assets/utils/dictionaries/telemetry/damageTypeCategory.json';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.scss']
})
export class MatchInfoComponent implements OnInit {
    @Input() playerData: PlayerData;
    parseMapName = mapName;
    parseWeaponName = dmgCauserName;
    time = moment;
    selectedLink = 'prev-match';
    matchId = '';
    loading = false;

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit() {
    this.matchId = this.playerData.data.prevMatch.matchId;
  }
    onPlayerSearch(shardName: string, name: string) {
        this.router.navigate(['shard', shardName, 'player', name]);
    }

}
