import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search.service';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

    constructor(private searchService: SearchService) { }

    playerName: string = '';
    shard: string = 'psn';

    onPlayerSearch() {
        this.searchService.startPlayerSearch({ shard: this.shard, playerName: this.playerName });
    }

    ngOnInit() {
    }

}
