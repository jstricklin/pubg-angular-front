import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'app-engagements',
  templateUrl: './engagements.component.html',
  styleUrls: ['./engagements.component.scss']
})
export class EngagementsComponent implements OnInit {

  constructor(private searchService: SearchService) { }
    playerData: {  };

  ngOnInit() {
      this.searchService.playerSearch.subscribe(
          (e) => {
              this.playerData = this.searchService.playerData;
          }
      );
  }

}
