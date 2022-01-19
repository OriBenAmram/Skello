import {boardService} from '../../services/board.service.js';

// TODO: add filterby support
export function loadBoards() {
  return async dispatch => {
    try {
      const boards = await boardService.query();
      const action = {type: 'SET_BOARDS', boards};
      dispatch(action);
    } catch (err) {}
  };
}

export function loadBoard(boardId) {
  return async dispatch => {
    try {
      const board = await boardService.getById(boardId);

      dispatch({type: 'SET_BOARD', board});
      return board;
    } catch (err) {
      console.log('BoardActions: err in loadBoard', err);
    }
  };
}
