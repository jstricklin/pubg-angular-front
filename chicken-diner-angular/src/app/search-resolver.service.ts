import { Injectable } from '@angular/core';
import { SearchService } from './shared/search.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchResolver implements Resolve<{}> {
    constructor(private searchService: SearchService) {  }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{}> | Promise<{}> | {} {
        console.log('player params', route.params);
        return this.searchService.startPlayerSearch({ shard: route.params['shard'], playerName: route.params['name'] });
    }

}

