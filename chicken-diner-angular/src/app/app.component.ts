import { Component, OnInit } from '@angular/core';
import { environment as env } from '../environments/environment';
import { SearchService } from './shared/search.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: []
})
export class AppComponent implements OnInit {
    constructor(private searchService: SearchService) {  }

    playerData: { prevMatch: { map: string } };
    title = 'chicken-diner-angular';
    // playerName: string = '';
    // matchId: string = '';
    // shard: string = '';
    email = env.EMAIL_ADDY;
    loading = false;

    ngOnInit() {
        this.searchService.playerSearch.subscribe(
            (event) => {
                this.loading = event.loading;
                this.playerData = this.searchService.playerData;
            }
        );
    }

}
