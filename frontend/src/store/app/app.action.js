
export function toggleSideMenu() {
  return async dispatch => {
    dispatch({
      type: 'TOGGLE_SIDEBAR',
    });
  };
}

export function toggleBlindMode() {
  return async dispatch => {
    dispatch({
      type: 'TOGGLE_BLINDMODE',
    });
  };
}

export function toggleModal({ event, type, posXAddition = 0, posYAddition = 0, isShown = false, member = null, title, isListening }) {
  console.log('title:', title);

  return async dispatch => {
    dispatch({
      type: 'TOGGLE_MODAL', modalInfo: { event, type, posXAddition, posYAddition, isShown, member, title, isListening }
    });
  };
}