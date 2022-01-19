import { boardService } from "../../services/board.service";

const initialState = {
    board: null,
    boards: boardService.getBoardsFromStorage() || []
};

export function boardReducer(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'SET_BOARD':
            return (newState = { ...state, board: action.board });

        case 'SET_BOARDS':
            return (newState = { ...state, boards: action.boards });

        default:
            return newState;
    }
}
