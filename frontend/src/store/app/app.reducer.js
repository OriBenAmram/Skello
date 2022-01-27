import { appService } from '../../services/board.service';

const initialState = {
  isSideBarOpen: false,
  popupModal: {
    isModalOpen: false,
    event: null,
    type: null,
    posXAddition: 0,
    posYAddition: 0,
  }
};

export function appReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return (newState = { ...state, isSideBarOpen: !state.isSideBarOpen });
    case 'TOGGLE_MODAL':
      return (newState = {
        ...state, popupModal: {
          ...state.popupModal, isModalOpen: action.modalInfo.isShown,
          event: action.modalInfo.event, type: action.modalInfo.type, posXAddition: action.modalInfo.posXAddition,
          posYAddition: action.modalInfo.posYAddition
        }
      });

    default:
      return newState;
  }
}
