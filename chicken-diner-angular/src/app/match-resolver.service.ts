import { Injectable } from '@angular/core';
import { SearchService } from './shared/search.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MatchResolver implements Resolve<{}> {
    constructor(private searchService: SearchService) {  }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{}> | Promise<{}> | {} {
        return this.searchService.startMatchSearch({ shard: route.params['shard'],
            playerName: route.params['name'],
            matchId: route.params['matchId'] });
    }

}
