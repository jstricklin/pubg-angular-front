import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PlayerData } from '../../shared/player-data.model';
import * as dmgCategory from '../../../assets/utils/dictionaries/telemetry/damageTypeCategory.json';
import * as dmgCauserName from '../../../assets/utils/dictionaries/telemetry/damageCauserName.json';

@Component({
    selector: 'app-engagement-details',
    templateUrl: './engagement-details.component.html',
    styleUrls: ['./engagement-details.component.scss']
})
export class EngagementDetailsComponent implements OnInit, OnChanges {

    @Input() playerData: PlayerData;
    @Input() enemyName: string;
    @Input() hidden = true;
    @Input() selectedName: string;
    knockData: {};
    killData: {};
    knockerData: {};
    playerWeapons: any[] = [];
    enemyWeapons: any[] = [];
    parseWeaponName = dmgCauserName;
    playerName: string;

    constructor() { }

    ngOnInit() {
        this.getHits();
        this.playerName = this.playerData.data.playerName;
    }
    ngOnChanges() {
        if (this.enemyName === this.selectedName) {
            this.hidden = !this.hidden;
        }
    }
    getHits() {
        // get knockers
        this.knockerData = this.playerData.data.prevMatch.sortedKnocker.filter(knock => knock.name === this.enemyName)[0];
        // get knocks
        this.knockData = this.playerData.data.prevMatch.sortedKnocks.filter(knock => knock.victim.name === this.enemyName)[0];
        // get kill data
        this.killData = this.playerData.data.prevMatch.sortedKills.filter(kill => kill.victim.name === this.enemyName)[0];
        // get player weapons
        this.playerData.data.prevMatch.sortedHits.map(hit => {
            if (hit.victim.name === this.enemyName) {
                this.playerWeapons = hit.weapons;
            }
        });
        // get enemy weapons
        this.playerData.data.prevMatch.sortedAttackers.map(hit => {
            if (hit.attacker.name === this.enemyName) {
                console.log('hit', hit);
                this.enemyWeapons = hit.weapons;
            }
        });
        // this.playerData.data.prevMatch.sortedAttackers
        // this.playerData.data.prevMatch.sortedKnockers
    }
}
