import { takeInput } from '../modules/take-input.js'

function askPlayerInfo(num, playersAndScores, total) {
  let _userName = takeInput(`Write name of player ${num}`);
  if (playersAndScores[_userName]) {
    console.log('Player name is already taken.');
    askPlayerInfo(num, playersAndScores, total);
  } else {
    playersAndScores[_userName] = 0;
  }
  if (num < total) {
    askPlayerInfo(num + 1, playersAndScores, total);
  } else {
    return playersAndScores;
  }
}
export function storePlayersName() {
  let numberOfPlayers = takeInput('How many people are there? ');
  // let playersAndScores = {};
  // let num = 1;
  // playersAndScores = askPlayerInfo(num, playersAndScores, numberOfPlayers);

  return numberOfPlayers;
}

