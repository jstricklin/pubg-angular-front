import { Output, EventEmitter } from '@angular/core';

export class Events {
    @Output () playerSearch = new EventEmitter<{ shard: string, playerName: string }>();

    onPlayerSearch(shardName: string, name: string) {
        this.playerSearch.emit({
            shard: shardName,
            playerName: name,
        });
    console.log('hit!', shardName, name);
    }
}
