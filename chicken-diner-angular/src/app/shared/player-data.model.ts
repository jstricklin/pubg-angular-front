export class PlayerData {
    constructor (public data: {
        playerName: string,
        prevMatch: {
            map: string,
            accuracy: number,
            matchId: string;
            teamMates: string[],
            sortedHits: {
                victim: {
                    name: string,
                    teamId, number,
                },
                weapons: [],
            }[],
            killer: {},
            sortedKills: {
                victim: {
                    name: string,
                    teamId, number,
                },
                weapon: {
                    name: string,
                },
                damageReasom: string,
                distance: number,

            }[],
            sortedAttackers: {
                attacker: {
                    name: string,
                    teamId, number,
                },
                weapons: [],
            }[],
            sortedKnocks: {}[],
            sortedKnocker: {}[],
            matchStats: {
                winPlace: number,
            },
            gameMode: string,
            matchTime: string,
            shard: string,
        },
        TotalMatchesPlayed: number,
        generalStats: {},
        prevMatchList: {}[],
    }
    ) {  }
}
