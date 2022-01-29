import { boardService } from '../../services/board.service.js';

export function setBoard(board) {
  return async dispatch => {
    try {
      dispatch({ type: 'SET_BOARD', board });
    } catch (err) {
      console.log('Cannot set board', err);
    }
  };
}


export function setFilter(filterBy) {
  return async dispatch => {
    try {
      const action = { type: 'SET_FILTER', filterBy };
      dispatch(action);
    } catch (err) {
      console.log('Cant load boards', err);
    }
  };
}

// TODO: add filterby support
export function loadBoards() {
  return async dispatch => {
    try {
      const boards = await boardService.query();
      const action = { type: 'SET_BOARDS', boards };
      dispatch(action);
    } catch (err) {
      console.log('Cant load boards', err);
    }
  };
}

export function addBoard(boardToAdd) {
  return async dispatch => {
    try {
      const savedBoard = await boardService.add(boardToAdd.title, boardToAdd.style);
      const action = { type: 'ADD_BOARD', board: savedBoard };
      dispatch(action);
    } catch (err) {
      console.log('Cant load boards', err);
    }
  };
}

export function addActivity(boardId, task, txt) {
  return async dispatch => {
    try {
      const board = await boardService.addActivity(boardId, task, txt);
      dispatch({ type: 'SAVE_BOARD', board });
      return board;
    } catch (err) {
      console.log('BoardActions: err in loadBoard', err);
    }
  };
}

export function loadBoard(boardId) {
  return async dispatch => {
    try {
      const board = await boardService.getById(boardId);
      dispatch({ type: 'SET_BOARD', board });
      return board;
    } catch (err) {
      console.log('BoardActions: err in loadBoard', err);
    }
  };
}

export function addTask(taskTitle, groupId, boardId) {
  return async dispatch => {
    try {
      const board = await boardService.addTask(taskTitle, groupId, boardId);
      dispatch({
        type: 'SAVE_BOARD',
        board: board,
      });
    } catch (err) {
      console.log('Cant add task', err);
    }
  };
}

export function addGroup(groupTitle, boardId) {
  return async dispatch => {
    try {
      const board = await boardService.addGroup(groupTitle, boardId);
      dispatch({
        type: 'SAVE_BOARD',
        board: board,
      });
    } catch (err) {
      console.log('Cant add group', err);
    }
  };
}

export function removeGroup(groupId, boardId) {
  return async dispatch => {
    try {
      const board = await boardService.removeGroup(groupId, boardId);
      dispatch({
        type: 'SAVE_BOARD',
        board,
      });
    } catch (err) {
      console.log('Cant remove group', err);
    }
  };
}

export function addChecklist(checklistTitle, groupId, board, taskId, activityTxt = null) {
  return async dispatch => {
    try {
      const updatedBoard = await boardService.addChecklist(
        checklistTitle,
        groupId,
        board._id,
        taskId,
        activityTxt
      );
      dispatch({
        type: 'SAVE_BOARD',
        board: updatedBoard,
      });
    } catch (err) {
      console.log('Cant add checklist', err);
    }
  };
}

// function addBoard(board) {
//   return async dispatch => {
//     try {
//       const boards = await boardService.addBoard(boardId, groupId, taskId, taskToUpdate, activityTxt);
//       dispatch({
//         type: 'SAVE_BOARD',
//         board: board,
//       });
//     } catch (err) {
//       console.log('Cant update task', err);
//     }
//   };
// }

export function updateTask(boardId, groupId, taskId, taskToUpdate, activityTxt = null, isComment = false) {
  return async dispatch => {
    try {
      const board = await boardService.updateTask(boardId, groupId, taskId, taskToUpdate, activityTxt, isComment);
      dispatch({
        type: 'SAVE_BOARD',
        board: board,
      });
    } catch (err) {
      console.log('Cant update task', err);
    }
  };
}
export function updateTaskTest(board, taskToUpdate) {
  return async dispatch => {
    try {
      const boardToSave = await boardService.updateTaskTest(board._id, taskToUpdate);
      dispatch({
        type: 'SAVE_BOARD',
        board: boardToSave,
      });
    } catch (err) {
      console.log('Cant update task', err);
    }
  };
}

// change to saveBoard
export function onSaveBoard(board) {
  return async dispatch => {
    try {
      const savedBoard = await boardService.update(board);
      dispatch({ type: 'SAVE_BOARD', board: savedBoard });
    } catch (err) {
      console.log('BoardActions: err in onSaveBoard', err);
    }
  };
}

export function addNewTodo(board, groupId, taskId, checklistId, title) {
  return async dispatch => {
    try {
      const updatedBoard = await boardService.addTodo(board._id, groupId, taskId, checklistId, title);
      dispatch({
        type: 'SAVE_BOARD',
        board: updatedBoard,
      });
    } catch (err) {
      console.log('Cant add checklist', err);
    }
  };
}

export function addFile(board, groupId, taskId, fileUrl) {
  return async dispatch => {
    try {
      const updatedBoard = await boardService.addFile(board._id, groupId, taskId, fileUrl);
      dispatch({
        type: 'SAVE_BOARD',
        board: updatedBoard,
      });
    } catch (err) {
      console.log('Cant add file', err);
    }
  };
}

export function handleDrag(
  board,
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  type
) {

  return async dispatch => {
    if (type === 'group') {
      // take out group from old index
      const group = board.groups.splice(droppableIndexStart, 1);
      // insert group to new index
      board.groups.splice(droppableIndexEnd, 0, ...group);
    } else {
      // Moving task in the same group
      if (droppableIdStart === droppableIdEnd) {
        const group = board.groups.find(group => group.id === droppableIdStart);
        const task = group.tasks.splice(droppableIndexStart, 1);
        group.tasks.splice(droppableIndexEnd, 0, ...task);
      }
      // Moving task between differents groups // CR: also refactor name
      if (droppableIdStart !== droppableIdEnd) {
        // Find the group where drag happened
        const groupStart = board.groups.find(group => group.id === droppableIdStart);

        // Pull out task from this group
        const task = groupStart.tasks.splice(droppableIndexStart, 1);

        // Find the group where drag ended
        const groupEnd = board.groups.find(group => group.id === droppableIdEnd);

        // Put the task in the new group
        groupEnd.tasks.splice(droppableIndexEnd, 0, ...task);
      }
    }
    const savedBoard = await boardService.update(board);
    console.log('savedBoard:', savedBoard);


    dispatch({
      type: 'SAVE_BOARD',
      board: savedBoard,
    });
  };
}
