// demo.ts

"use strict";

interface Opponent {
  alias: string;
  health: number;
}

class ComicBookCharacter {
  // by default all class properties have public access
  private team: {
    name: string,
    members: ComicBookCharacter[]
  };

  constructor(
    // without access level we will get wrong behavior
    public alias: string,
    public health: number,
    public strength: number,
    private secretIdentity: string
  ) {}

  attackFunc(opponent: Opponent, attackWith: number) {
    opponent.health -= attackWith;

    console.log(`${this.alias} attacked ${opponent.alias}, who's health = ${opponent.health}`);

    return opponent.health;
  }

  getSecretIdentity() {
    console.log(`${this.alias} is ${this.secretIdentity}`);
  }

  static createAndAssignTeam(teamName: string, members: ComicBookCharacter[]) {
    let team = {
      name: teamName,
      members
    };

    members.forEach(member => {
      member.team = team;
    });
  }

  getTeamName() {
    console.log(`${this.alias} is on Team ${this.team.name}`);
  }
}

let storm = new ComicBookCharacter("Storm", 100, 100, "Ororo Munroe");

let theBlob = new ComicBookCharacter("The Blob", 1000, 5000, "Fred J. Dukes");

storm.attackFunc(theBlob, storm.strength);
storm.getSecretIdentity();

ComicBookCharacter.createAndAssignTeam("oddCouple", [storm, theBlob]);

theBlob.getTeamName();
