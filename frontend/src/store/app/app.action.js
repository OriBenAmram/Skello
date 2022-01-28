
export function toggleSideMenu() {
  return async dispatch => {
    dispatch({
      type: 'TOGGLE_SIDEBAR',
    });
  };
}

export function toggleModal({ event, type, posXAddition = 0, posYAddition = 0, isShown = false, member = null }) {
  console.log('!!!!!!!!!!!@@@@@@@');
  console.log('toggeling')
  return async dispatch => {
    dispatch({
      type: 'TOGGLE_MODAL', modalInfo: { event, type, posXAddition, posYAddition, isShown, member }

    });
  };
}