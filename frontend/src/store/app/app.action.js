export function toggleSideMenu() {
    return async dispatch => {
        dispatch({
            type: 'TOGGLE_SIDEBAR',
        });
    };
}

export function toggleBlindMode() {
    console.log('toggeling:');

    return async dispatch => {
        dispatch({
            type: 'TOGGLE_BLINDMODE',
        });
    };
}

export function toggleModal({
    event = null,
    type = null,
    posXAddition = 0,
    posYAddition = 0,
    isShown = false,
    member = null,
    title,
    isListening,
    extraMembers,
    task,
    groupId,
}) {
    return async dispatch => {
        dispatch({
            type: 'TOGGLE_MODAL',
            modalInfo: {
                event,
                type,
                posXAddition,
                posYAddition,
                isShown,
                member,
                title,
                isListening,
                extraMembers,
                task,
                groupId,
            },
        });
    };
}