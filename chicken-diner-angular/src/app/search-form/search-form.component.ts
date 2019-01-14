import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

    constructor() { }

    playerName: string = '';
    shard: string = 'psn';

    @Output() playerSearch = new EventEmitter<{shard: string, playerName: string}>();

    onPlayerSearch(shard, playerName) {
        this.playerSearch.emit({
            shard: shard,
            playerName: playerName
        });
    }

    ngOnInit() {
    }

}
