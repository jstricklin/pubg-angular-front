import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.scss']
})
export class MatchInfoComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

}
