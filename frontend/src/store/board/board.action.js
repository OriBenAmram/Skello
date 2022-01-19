import {boardService} from '../../services/board.service.js'

// TODO: add filterby support 
export function loadBoards() {
    return async (dispatch) => {
        try {
            // console.log('')
            const boards = await boardService.query()
            console.log('boards after await in board.action', boards)
            const action = { type: 'SET_BOARDS', boards };
            dispatch(action)
        } catch (err) {
            console.log('had problem with loading the board')
        }
    }
}

// export function loadBoard() {
//     return async (dispatch) => {
//         try {
//             const board = await boardService.query()
//             console.log('board after await in board.action', board)
//             const action = { type: 'SET_BOARD', board };
//             dispatch(action)
//         } catch (err) {
//             console.log('had problem with loading the board')
//         }
//     }
//     console.log('loadBoard')
// }