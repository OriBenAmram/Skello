

export function toggleSideMenu() {
    return async dispatch => {
        
        dispatch({
          type: 'TOGGLE_MODAL',
        });
    };
  }