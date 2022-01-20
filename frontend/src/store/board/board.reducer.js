import {boardService} from '../../services/board.service';

const initialState = {
  board: null,
  boards: boardService.getBoardsFromStorage() || [],
};

export function boardReducer(state = initialState, action) {
  let newState = state;
  let boards;
  switch (action.type) {
    case 'SET_BOARD':
      return (newState = {...state, board: action.board});

    case 'SET_BOARDS':
      return (newState = {...state, boards: action.boards});

    case 'SAVE_BOARD':
      boards = state.boards.map(board => (board._id === action.board._id ? action.board : board));
      return (newState = {...state, board: {...action.board}});

    default:
      return newState;
  }
}
