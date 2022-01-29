import { boardService } from '../../services/board.service';

const initialState = {
  board: null,
  boards: [],
  filterBy: { labels: [], members: [], txt: '' }
  // boards: boardService.getBoardsFromStorage() || [],
};

export function boardReducer(state = initialState, action) {
  let newState = state;
  let boards;
  switch (action.type) {
    case 'SET_BOARD':
      return (newState = { ...state, board: action.board });
    case 'ADD_BOARD':
      return (newState = { ...state, boards: [...state.boards, action.board] });
    case 'SET_BOARDS':
      return (newState = { ...state, boards: action.boards });
    case 'SET_FILTER':
      return (newState = { ...state, filterBy: { ...action.filterBy } });

    case 'SAVE_BOARD':
      boards = state.boards.map(board => (board._id === action.board._id ? action.board : board));
      return (newState = { ...state, boards, board: { ...action.board } });
    default:
      return newState;
  }
}
