const initialState = {
  isSideBarOpen: false,
  isBlindMode: false,
  popupModal: {
    isModalOpen: false,
    event: null,
    type: null,
    posXAddition: 0,
    posYAddition: 0,
    member: null,
    extraMembers: [],
    boardTitle: '',
    isListening: false,
    task: null,
    groupId: '',
  },
};

export function appReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return (newState = {...state, isSideBarOpen: !state.isSideBarOpen});
    case 'TOGGLE_BLINDMODE':
      return (newState = {...state, isBlindMode: !state.isBlindMode});
    case 'TOGGLE_MODAL':
      return (newState = {
        ...state,
        popupModal: {
          ...state.popupModal,
          isModalOpen: action.modalInfo.isShown,
          event: action.modalInfo.event,
          type: action.modalInfo.type,
          posXAddition: action.modalInfo.posXAddition,
          posYAddition: action.modalInfo.posYAddition,
          member: action.modalInfo.member,
          boardTitle: action.modalInfo.title,
          isListening: action.modalInfo.isShown,
          extraMembers: action.modalInfo.extraMembers,
          task: action.modalInfo.task,
          groupId: action.modalInfo.groupId,
        },
      });

    default:
      return newState;
  }
}
