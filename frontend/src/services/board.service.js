import { storageService } from './async-storage.service.js';

const STORAGE_KEY = 'board';
let gboard = _getBoards();

function _getBoards() {
    let boards = storageService.loadFromStorage(STORAGE_KEY);
    if (!boards || !toys.length) {
        toys = DUMMY_TOYS;
    }
    _saveToysToStorage(toys);
    return toys;
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