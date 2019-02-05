import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerPageComponent } from './player-page/player-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { SearchResolver } from './search-resolver.service';
import { MatchResolver } from './match-resolver.service';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shard/:shard/player/:name', component: PlayerPageComponent, resolve: { playerData: SearchResolver } },
    { path: 'shard/:shard/player/:name/match/:matchId', resolve: { matchData: MatchResolver }, component: PlayerPageComponent },
    { path: 'error', component: ErrorPageComponent, data: { message: 'Sorry, page not found...'} },
    { path: '**', redirectTo: '/error' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
