import { storePlayersName } from './features/create-players.js';

function __init__() {
  console.log('Welcome to Game, Press answer to get started');
  const initialPlayers = storePlayersName();
  console.log(initialPlayers);
}

__init__();