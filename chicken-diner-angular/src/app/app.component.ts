import { Component } from '@angular/core';
import { environment as env } from '../environments/environment';
import * as moment from 'moment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() {  }

    playerData: {};
    title = 'chicken-diner-angular';
    time = moment;

    onPlayerStartSearch(data) {
        if (data.playerName === '') { return; }
        console.log('onPlayerStartSearch', data);
        // console.log('env', env.API_URL);
        fetch(`${env.API_URL}/shard/${data.shard}/player/${data.playerName}`)
            .then(res => res.json())
            .then(json => this.playerData = json)
            .then(json => console.log('player data', this.playerData));
    }
}
