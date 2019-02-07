import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HeaderComponent } from './header/header.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { SearchService } from './shared/search.service';
import { SearchResolver } from './search-resolver.service';
import { MatchResolver } from './match-resolver.service';
import { EngagementsComponent } from './engagements/engagements.component';
import { MatchInfoComponent } from './match-info/match-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    HeaderComponent,
    PlayerPageComponent,
    ErrorPageComponent,
    HomeComponent,
    EngagementsComponent,
    MatchInfoComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      FormsModule,
  ],
  providers: [SearchService, SearchResolver, MatchResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
