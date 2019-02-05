import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
    selector: 'app-error-page',
    templateUrl: './error-page.component.html',
    styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
    errorMessage: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe(
            (data: Data) => {
                switch (this.route.snapshot.fragment) {
                    case 'player-not-found' :
                        this.errorMessage = 'Player not found.';
                        break;
                    case 'match-not-found' :
                        this.errorMessage = 'Match Data not found.';
                        break;
                    case null:
                        this.errorMessage = data['message'];
                        break;
                    default :
                        this.errorMessage = this.route.snapshot.fragment;
                }
            }
        );
    }

}
