import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as dmgCauserName from '../../assets/utils/dictionaries/telemetry/damageCauserName.json';
import * as mapName from '../../assets/utils/dictionaries/telemetry/mapName.json';
import * as itemId from '../../assets/utils/dictionaries/telemetry/item/itemId.json';
import * as dmgCategory from '../../assets/utils/dictionaries/telemetry/damageTypeCategory.json';
// import { Events } from '../shared/search-event.model';
const miramarBG = '../../assets/images/miramar-bg-01.png';
import { SearchService } from '../shared/search.service';
import { ActivatedRoute, Params, Data, Router } from '@angular/router';
import { EngagementsComponent } from '../engagements/engagements.component';
import { PlayerData } from '../shared/player-data.model';

@Component({
    selector: 'app-player-page',
    templateUrl: './player-page.component.html',
    styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {

    constructor(private searchService: SearchService, private router: Router, private route: ActivatedRoute) {  }

    parseMapName = mapName;
    parseWeaponName = dmgCauserName;
    time = moment;
    selectedLink = 'prev-match';
    matchId = '';
    playerData: PlayerData;
    loading = false;

    onPlayerSearch(shardName: string, name: string) {
        this.router.navigate(['shard', shardName, 'player', name]);
    }
    onMatchSearch(shardName: string, name: string, matchId: string) {
        // console.log(shardName, name, matchId);
        this.router.navigate(['shard', shardName, 'player', name, 'match', matchId]);
    }
    onLinkClick(route) {
        if (this.loading) {
            return;
        }
        this.selectedLink = route;
    }

    ngOnInit() {
        this.searchService.playerSearch.subscribe(
            (e) => {
                this.playerData = this.searchService.playerData;
                this.selectedLink = e.selectedPage;
                this.loading = e.loading;
                this.matchId = e.matchId;
            }
        );
        if (this.route.snapshot.params.matchId) {
            this.route.data.subscribe(
                (data: Data) => {
                    console.log('match data rdy!', data);
                    this.playerData = data['matchData'];
                }
            );
        } else {
            console.log('just player', this.route.snapshot.params);
            this.route.data.subscribe(
                (data: Data) => {
                    console.log('p data rdy!', data);
                    this.playerData = data['playerData'];
                }
            );
        }

        // this.playerData = this.searchService.playerData;
        // this.matchId = this.searchService.matchId;
        // this.searchService.playerSearch.subscribe((e) => {
        //     this.playerData = this.searchService.playerData;
        //     this.selectedLink = e.selectedPage;
        //     this.matchId = e.matchId;
        //     this.loading = e.loading;
        // });
        // this.route.params.subscribe(
        //     (params: Params) => {
        //         if (params.name === this.playerData.playerName && params.matchId === this.matchId) { 
        //             console.log('same params', params, this.playerData.playerName);
        //             return; 
        //         } else {
        //             console.log('diff params', params);
        //             this.searchService.startMatchSearch({
        //                 shard: params.shard,
        //                 playerName: params.name,
        //                 matchId: params.matchId
        //             });
        //         }
        //     }
        // );
    }

}
