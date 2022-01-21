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

export function addTask(taskTitle, groupId, boardId) {
  return async dispatch => {
    try {
      const board = await boardService.addTask(taskTitle, groupId, boardId);
      dispatch({
        type: 'SAVE_BOARD',
        board: board,
      });
    } catch (err) {
      console.log('cant add task', err);
    }
  };
}

export function addGroup(groupTitle, boardId) {
  return async dispatch => {
    try {
      const board = await boardService.addGroup(groupTitle, boardId);
      dispatch({
        type: 'SAVE_BOARD',
        board: board,
      });
    } catch (err) {
      console.log('cant add group', err);
    }
  };
}

export function onSaveBoard(board) {
  return async dispatch => {
    try {
      const savedBoard = await boardService.save(board);
      console.log('savedBoard:', savedBoard);
      dispatch({type: 'SAVE_BOARD', board: savedBoard});
    } catch (err) {
      console.log('BoardActions: err in onSaveBoard', err);
    }
  };
}

export function handleDrag(
  board,
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  type
) {
  console.log('handle Drag ->');
  console.log('🚀 ~ file: board.action.js ~ line 75 ~ type', type);
  console.log('🚀 ~ file: board.action.js ~ line 75 ~ droppableIndexEnd', droppableIndexEnd);
  console.log('🚀 ~ file: board.action.js ~ line 75 ~ droppableIndexStart', droppableIndexStart);
  console.log('🚀 ~ file: board.action.js ~ line 75 ~ droppableIdEnd', droppableIdEnd);
  console.log('🚀 ~ file: board.action.js ~ line 75 ~ droppableIdStart', droppableIdStart);
  return async dispatch => {
    const newBoard = {...board};
    if (type === 'group') {
      // take out group from old index
      const group = newBoard.groups.splice(droppableIndexStart, 1);
      // insert group to new index
      newBoard.groups.splice(droppableIndexEnd, 0, ...group);
    }

    await boardService.save(newBoard);

    dispatch({
      type: 'SAVE_BOARD',
      board: newBoard,
    });
  };
}
