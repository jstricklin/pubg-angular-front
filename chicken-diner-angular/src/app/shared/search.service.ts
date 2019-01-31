import { environment as env } from '../../environments/environment';
import { EventEmitter } from '@angular/core';
export class SearchService {
    playerData: { prevMatch: { map: string } };
    loading = false;

    playerName: string = '';
    matchId: string = '';
    shard: string = '';
    email = env.EMAIL_ADDY;

    playerSearch = new EventEmitter<{
        loading: boolean,
        selectedPage: string,
        matchId: string
    }>();

    startPlayerSearch(data) {
        if (data.playerName === '' || this.loading) { return; }
        this.playerData = null;
        this.playerName = data.playerName;
        this.shard = data.shard;
        this.playerSearch.emit({ loading: true, selectedPage: 'loading', matchId: 'None' });
        console.log('onPlayerStartSearch', data);
        // console.log('env', env.API_URL);
        fetch(`${env.API_URL}/shard/${data.shard}/player/${data.playerName}`)
            .then(res => res.json())
            .then(json => {
                if (json.error) {
                    throw json;
                } else {
                    this.playerData = json;
                    this.playerSearch.emit({
                        matchId: json.prevMatch.matchId,
                        selectedPage: 'prev-match',
                        loading: false
                    });
                }})
            .then(json => { console.log('player data', this.playerData);  })
            .catch(err => {
                this.loading = false;
                this.playerSearch.emit(
                    {
                        matchId: 'None',
                        loading: this.loading,
                        selectedPage: 'prev-match'
                    });
                alert(err.error); });
    }
    startMatchSearch(data) {
        if (data.playerName === '' || this.loading) { return; }
        this.playerName = data.playerName;
        this.matchId = data.matchId;
        this.shard = data.shard;
        this.loading = true;
        console.log('startMatchSearch service', data);
        this.playerSearch.emit({
            matchId: data.matchId,
            selectedPage: 'loading',
            loading: this.loading,
        });
        // console.log('env', env.API_URL);
        fetch(`${env.API_URL}/shard/${data.shard}/player/${data.playerName}/match/${data.matchId}`)
            .then(res => res.json())
            .then(json => {
                console.log('res', json);
                this.playerData.prevMatch = json;
                this.loading = false;
                this.playerSearch.emit({
                    selectedPage: 'prev-match',
                    loading: this.loading,
                    matchId: data.matchId
                });
            })
            // .then(json => { console.log('match data', this.playerData);  })
            .catch(err => {
                alert('No match data found!');
                this.loading = false;
                this.playerSearch.emit(
                    {
                        matchId: 'None',
                        loading: this.loading,
                        selectedPage: 'prev-match'
                    });
            });
    }
}
