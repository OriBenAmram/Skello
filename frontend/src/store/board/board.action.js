import { boardService } from '../../services/board.service.js'

// TODO: add filterby support
export function loadBoards() {
    return async dispatch => {
        try {
            const boards = await boardService.query();
            console.log('boards:', boards);
            const action = { type: 'SET_BOARDS', boards };
            dispatch(action)
            console.log('after duspatch');
        } catch (err) {
            console.log('BoardActions: err in loadBoards', err)
        }
    }
}
