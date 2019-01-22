import { Component } from '@angular/core';
import { environment as env } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() {  }

    playerData: { prevMatch: { map: string } };
    title = 'chicken-diner-angular';
    playerName: string = '';
    matchId: string = '';
    shard: string = '';
    email = env.EMAIL_ADDY;
    selectedPage = 'prev-match';
    loading = false;

    routeLink(route) {
        if (this.loading) {
            return
        }
        this.selectedPage = route;
    }

    onPlayerStartSearch(data) {
        if (data.playerName === '' || this.loading) { return; }
        this.playerData = null;
        this.playerName = data.playerName;
        this.shard = data.shard;
        this.loading = true;
        this.selectedPage = 'loading';
        console.log('onPlayerStartSearch', data);
        // console.log('env', env.API_URL);
        fetch(`${env.API_URL}/shard/${data.shard}/player/${data.playerName}`)
            .then(res => res.json())
            .then(json => {
                if (json.error) {
                    throw json;
                } else {
                    this.playerData = json; this.matchId = json.prevMatch.matchId; this.selectedPage = 'prev-match'; this.loading = false;
                }})
            .then(json => { console.log('player data', this.playerData);  })
            .catch(err => { this.loading = false; this.selectedPage = 'prev-match'; alert(err.error); });
    }
    onMatchStartSearch(data) {
        if (data.playerName === '' || this.loading) { return; }
        this.playerName = data.playerName;
        this.matchId = data.matchId;
        this.shard = data.shard;
        this.selectedPage = 'loading';
        this.loading = true;
        console.log('onPlayerStartSearch', data);
        // console.log('env', env.API_URL);
        fetch(`${env.API_URL}/shard/${data.shard}/player/${data.playerName}/match/${data.matchId}`)
            .then(res => res.json())
            .then(json => { console.log('res', json), this.playerData.prevMatch = json; this.selectedPage = 'prev-match'; this.loading = false; })
            // .then(json => { console.log('match data', this.playerData);  })
            .catch(err => alert('No match data found!'));
    }
}
