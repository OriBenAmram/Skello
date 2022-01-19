import {storageService} from './async-storage.service.js';
import DUMMY_BOARDS from './board.dummy.data.service';

const STORAGE_KEY = 'board';
let gBoard = _getBoards();

function _getBoards() {
  let boards = storageService.loadFromStorage(STORAGE_KEY);
  if (!boards || !boards.length) {
    boards = DUMMY_BOARDS;
  }
  _saveBoardsToStorage(boards);
  return boards;
}

export const boardService = {
    query,
    // getById,
    // save,
    // remove
}


function query() { 
    return storageService.query(STORAGE_KEY)
}

function _saveBoardsToStorage(boards) {
  storageService.saveToStorage(STORAGE_KEY, boards);
}
