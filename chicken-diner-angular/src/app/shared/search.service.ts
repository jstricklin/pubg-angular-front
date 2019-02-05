import { environment as env } from '../../environments/environment';
import { EventEmitter, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class SearchService {
    constructor(private router: Router, private route: ActivatedRoute) {  }
    playerData: { playerName: string, prevMatch: { map: string } };
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
        // console.log('onPlayerStartSearch', data);
        // console.log('env', env.API_URL);
        return fetch(`${env.API_URL}/shard/${data.shard}/player/${data.playerName}`)
            .then(res => res.json())
            .then(json => {
                if (json.error) {
                    throw json;
                } else {
                    this.playerData = json;
                    this.matchId = json.prevMatch.matchId;
                    this.loading = false;
                    this.playerSearch.emit({
                        matchId: this.matchId,
                        selectedPage: 'prev-match',
                        loading: this.loading
                    });
                    return json;
                }})
        // .then( json =>
        //     this.router.navigate([
        //         'shard', data.shard,
        //         'player', data.playerName,
        //         'match', json.prevMatch.matchId
        //     ])
        // )
        // .then(json => { console.log('player data', this.playerData);  })
            .catch(err => {
                this.loading = false;
                this.matchId = 'None';
                this.playerSearch.emit(
                    {
                        matchId: this.matchId,
                        loading: this.loading,
                        selectedPage: 'prev-match'
                    });
                this.router.navigate(['error'], { fragment: 'player-not-found' } );
            });
    }
    startMatchSearch(data) {
        if (data.playerName === '' || this.loading) { return; }
        // check if app entered from outside
        if (!this.playerData || this.playerName !== data.playerName ) {
            this.startPlayerSearch({ playerName: data.playerName, shard: data.shard })
                .then( res => {
                    this.startMatchSearch(data);
                });
        } else {
            console.log('player data', this.playerData);
            this.playerName = data.playerName;
            this.matchId = data.matchId;
            this.shard = data.shard;
            this.loading = true;
            // console.log('startMatchSearch service', data, this.route);
            // this.router.navigate(['./'] , { fragment: 'loading', relativeTo: this.route });
            this.playerSearch.emit({
                matchId: this.matchId,
                selectedPage: 'loading',
                loading: this.loading,
            });
            // console.log('env', env.API_URL);
            return fetch(`${env.API_URL}/shard/${data.shard}/player/${data.playerName}/match/${data.matchId}`)
                .then(res => res.json())
                .then(json => {
                    console.log('res', json);
                    this.playerData.prevMatch = json;
                    this.loading = false;
                    this.matchId = data.matchId;
                    this.playerSearch.emit({
                        selectedPage: 'prev-match',
                        loading: this.loading,
                        matchId: this.matchId
                    });
                    return this.playerData;
                })
            // .then( json =>
            //     this.router.navigate([
            //         'shard', data.shard,
            //         'player', data.playerName,
            //         'match', json.prevMatch.matchId
            //     ])
            // )
            // .then(json => { console.log('match data', this.playerData);  })
                .catch(err => {
                    console.log('err', err);
                    this.router.navigate(['error'], { fragment: 'match-not-found' } );
                    this.loading = false;
                    this.matchId = 'None';
                    this.playerSearch.emit(
                        {
                            matchId: this.matchId,
                            loading: this.loading,
                            selectedPage: 'prev-match'
                        });
                });
        }
    }
}
