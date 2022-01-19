import { storageService } from './async-storage.service.js';
import DUMMY_BOARDS from './board.dummy.data.service';

const STORAGE_KEY = 'boards';
_setBoardsToStorage()


function query() {
  return storageService.query(STORAGE_KEY)
}
function getBoardsFromStorage() {
  const boards = storageService.loadFromStorage(STORAGE_KEY);
  return boards
}



function _saveBoardsToStorage(boards) {
  storageService.saveToStorage(STORAGE_KEY, boards);
}

function _setBoardsToStorage() {
  let boards = storageService.loadFromStorage(STORAGE_KEY);
  if (!boards || !boards.length) {
    boards = DUMMY_BOARDS;
  }
  _saveBoardsToStorage(boards);
}

export const boardService = {
  query,
  getBoardsFromStorage
}
