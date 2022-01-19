const initialState = {
    board: null
};

export function boardReducer(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'SET_BOARD':
            return (newState = { ...state, board: action.board });
            break;
        case 'SET_BOARDS':
            return { ...state, boards: action.boards }
            break;
        default:
            return newState;
    }
}