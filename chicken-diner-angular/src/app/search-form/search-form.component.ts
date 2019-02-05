import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

    constructor(private searchService: SearchService, private router: Router) { }

    playerName: string = '';
    shard: string = 'psn';

    onPlayerSearch() {
        if ( this.playerName === '' ) { return; }
        this.router.navigate(['shard', this.shard, 'player', this.playerName])
        // this.searchService.startPlayerSearch({ shard: this.shard, playerName: this.playerName });
    }

    ngOnInit() {
    }

}
