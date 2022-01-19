
const initialState = {
    board: null
};

export function boardReducer(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'SET_BOARD':
            return (newState = { ...state, board: action.board });

        // case 'SET_BOARDS':
        //     return (newState = { ...state, users: action.users });

        default:
            return newState;
    }
}
