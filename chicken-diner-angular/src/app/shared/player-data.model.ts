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
                weapons: {
                    name: string;
                    totalDmg: number;
                }[],
            }[],
            killer: {
                name: string;
                teamId: number;
                weapon: string;
                damageReason: string;
                distance: number;
            },
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
            sortedKnocks: {
                victim: {
                name: string,
                teamId: number,

                }
                weapon: string,
                damageReason: string,
                distance: number,
            }[],
            sortedKnocker: {
                name: string,
                teamId: number,
                weapon: string,
                damageReason: string,
                distance: number,
            }[],
            matchStats: {
                winPlace: number,
                DBNOs: number,
                assists: number,
                boosts: number,
                damageDealt: number,
                deathType: string,
                headshotKills: number,
                heals: number,
                killPlace: number,
                killPoints: number,
                killPointsDelta: number,
                killStreaks: number,
                kills: number,
                lastKillPoints: number,
                lastWinPoints: number,
                mostDamage: number;
                name: string;
                playerId: string;
                revives: number;
                rideDistance: number;
                rankPoints: number;
                roadKills: number;
                swimDistance: number;
                teamKills: number;
                timeSurvived: number;
                vehicleDestroys: number;
                walkDistance: number;
                weaponsAcquired: number;
                winPoints: number;
                winPointsDelta: number;

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
