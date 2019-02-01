import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as dmgCauserName from '../../assets/utils/dictionaries/telemetry/damageCauserName.json';
import * as mapName from '../../assets/utils/dictionaries/telemetry/mapName.json';
import * as itemId from '../../assets/utils/dictionaries/telemetry/item/itemId.json';
import * as dmgCategory from '../../assets/utils/dictionaries/telemetry/damageTypeCategory.json';
// import { Events } from '../shared/search-event.model';
const miramarBG = '../../assets/images/miramar-bg-01.png';
import { SearchService } from '../shared/search.service';

@Component({
    selector: 'app-player-page',
    templateUrl: './player-page.component.html',
    styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {

    constructor(private searchService: SearchService) {  }

    parseMapName = mapName;
    parseWeaponName = dmgCauserName;
    time = moment;
    selectedLink = 'prev-match';
    matchId = '';
    playerData: { prevMatch: { map: string } };
    loading = false;

    onPlayerSearch(shardName: string, name: string) {
        this.searchService.startPlayerSearch({ shard: shardName, playerName: name });
    }
    onMatchSearch(shardName: string, name: string, matchId: string) {
        this.searchService.startMatchSearch({ shard: shardName, playerName: name, matchId: matchId });
    }
    onLinkClick(route) {
        if (this.loading) {
            return;
        }
        this.selectedLink = route;
    }

    ngOnInit() {
        this.playerData = this.searchService.playerData;
        this.searchService.playerSearch.subscribe((e) => {
            this.playerData = this.searchService.playerData;
            this.selectedLink = e.selectedPage;
            this.matchId = e.matchId;
            this.loading = e.loading;
        });
    }

}
