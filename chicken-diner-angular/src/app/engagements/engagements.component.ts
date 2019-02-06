import { Component, OnInit, ViewChildren, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { PlayerData } from '../shared/player-data.model';
@Component({
    selector: 'app-engagements',
    templateUrl: './engagements.component.html',
    styleUrls: ['./engagements.component.scss'],
})
export class EngagementsComponent implements OnInit, AfterViewInit {

    @ViewChildren('engagementRow') engagements: ElementRef[];

    constructor(private searchService: SearchService, private renderer: Renderer2) { }
    enemiesEngaged: string[] = ['Jane420', '666nightBlaDe333', 'senpaiDama'];
    playerData: PlayerData;

    ngOnInit() {
        this.playerData = this.searchService.playerData;
        // console.log('playerData', this.playerData.data);
        this.getEnemyData();

        this.searchService.playerSearch.subscribe(
            (e) => {
                this.playerData = this.searchService.playerData;
                this.getEnemyData();
            }
        );
    }
    ngAfterViewInit() {
        // this.getRowStyle();
        // this.renderer.setStyle(this.engagementRow.nativeElement, 'background-color', 'red');
    }
    getEnemyData() {
        if (!this.playerData) { return; }
        this.enemiesEngaged = [];
        this.playerData.data.prevMatch.sortedAttackers.sort((hit, prev) =>
            hit.attacker.teamId - prev.attacker.teamId).map( hit => this.enemiesEngaged.push(hit.attacker.name)
            );
        this.playerData.data.prevMatch.sortedHits.filter( hit => {
            if (!this.enemiesEngaged.includes(hit.victim.name)) {
                this.enemiesEngaged.push(hit.victim.name);
            }
        } );
    }
    getTotalDmg(el: ElementRef['nativeElement'], sortBy: string) {
        const name = el.attributes['data-enemy'].value;
        let weapons: [] = [];
        if (sortBy === 'received') {
            this.playerData.data.prevMatch.sortedAttackers.filter(attack => {
                if (attack.attacker.name === name) {
                    // console.log('attack', attack.weapons);
                    weapons = attack.weapons;
                    // console.log('post attackers', weapons);
                }
            });
        } else if (sortBy === 'dealt') {
            this.playerData.data.prevMatch.sortedHits.filter(attack => {
                if (attack.victim.name === name) {
                    // console.log('dealt attack', attack.weapons, name);
                    weapons = attack.weapons;
                    // console.log('post hits', weapons);
                    // console.log(weapons);
                }
            });
        }
        if ( weapons.length < 1 ) {
            return 0;
        } else {
            // console.log('weapon first hit', weapons);
            let totalDmg: number;
            if (weapons.length > 1) {
                // console.log(weapons.reduce((weap, prev) => weap.totalDmg + prev.totalDmg);
                // )
                console.log('multi weap', weapons);
                totalDmg = weapons.reduce((prev: { totalDmg: number }, weap: { totalDmg: number }) => {
                    console.log('reduce', weap, prev);
                    return prev.totalDmg + weap.totalDmg;
                });
            } else {
                // console.log(weapons);
                totalDmg = weapons[0].totalDmg;
            }
            return totalDmg.toFixed(2);
        }
    }
    // getRowStyle() {
    //     this.engagements.map(
    //         engagement => {
    //             const name = engagement.nativeElement.attributes['data-enemy'].value;
    //             if (this.playerData.prevMatch.killer.name === name) {
    //                 this.renderer.addClass(engagement.nativeElement, 'killer');
    //             }
    //         }
    // );
    // }

}
