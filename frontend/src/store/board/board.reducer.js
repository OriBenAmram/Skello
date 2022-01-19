const initialState = {
    board: null,
    boards: ['baba']
};

export function boardReducer(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'SET_BOARD':
            return (newState = { ...state, board: action.board });
        case 'SET_BOARDS':
            return { ...state, boards: action.boards }
        default:
            return newState;
    }
}

console.log('initialState:', initialState);
