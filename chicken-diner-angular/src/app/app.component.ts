import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() {  }

    title = 'chicken-diner-angular';

    onPlayerStartSearch(data) {
        console.log('onPlayerStartSearch', data);
    }
}
