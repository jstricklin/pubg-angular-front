import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HeaderComponent } from './header/header.component';
import { PlayerPageComponent } from './player-page/player-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    HeaderComponent,
    PlayerPageComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
