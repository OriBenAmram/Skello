import { appService } from '../../services/board.service';

const initialState = {
  isModalOpen: false
};

export function appReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return (newState = { ...state, isModalOpen: !state.isModalOpen });
    
    default:
      return newState;
  }
}
