import { Component } from '@angular/core';
import { environment as env } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() {  }

    playerData: { prevMatch: {} };
    title = 'chicken-diner-angular';
    playerName: string = '';
    matchId: string = '';
    shard: string = '';

    onPlayerStartSearch(data) {
        if (data.playerName === '') { return; }
        this.playerName = data.playerName;
        this.shard = data.shard;
        console.log('onPlayerStartSearch', data);
        // console.log('env', env.API_URL);
        fetch(`${env.API_URL}/shard/${data.shard}/player/${data.playerName}`)
            .then(res => res.json())
            .then(json => { this.playerData = json; this.matchId = json.prevMatch.matchId; })
            .then(json => { console.log('player data', this.playerData);  })
            .catch(err => alert('No player data found!'));
    }
    onMatchStartSearch(data) {
        if (data.playerName === '') { return; }
        this.playerName = data.playerName;
        this.matchId = data.matchId;
        this.shard = data.shard;
        console.log('onPlayerStartSearch', data);
        // console.log('env', env.API_URL);
        fetch(`${env.API_URL}/shard/${data.shard}/player/${data.playerName}/match/${data.matchId}`)
            .then(res => res.json())
            .then(json => { console.log('res', json), this.playerData.prevMatch = json; })
            // .then(json => { console.log('match data', this.playerData);  })
            .catch(err => alert('No match data found!'));
    }
}
