import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    loading: false;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
      this.searchService.playerSearch.subscribe(
          (e) => this.loading = e.loading
      );
  }

}
