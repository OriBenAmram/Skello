import axios from 'axios';
import {storageService} from './async-storage.service.js';
import {utilService} from '../services/util.service.js';
import DUMMY_BOARDS from './board.dummy.data.service';

const API_KEY_UNSPLASH = 'Nw9aD2jV-Yfb_bfoA37BqoleA2un9Nv68GDKeRed8Jk';

const STORAGE_KEY = 'boards';
const gBoards = _setBoardsToStorage();

function query() {
  return storageService.query(STORAGE_KEY);
}

async function queryImages(query = 'random') {
  const photos = await axios.get(
    `https://api.unsplash.com/search/photos/?query=${query}&client_id=${API_KEY_UNSPLASH}`
  );
  return photos.data.results;
}

function getBoardsFromStorage() {
  const boards = storageService.loadFromStorage(STORAGE_KEY);
  return boards;
}

function getById(boardId) {
  return storageService.get(STORAGE_KEY, boardId);
}

async function save(newBoard) {
  // Edit
  if (newBoard._id) {
    // update our gBoards that with the new board
    const oldBoard = gBoards.find(board => board._id === newBoard._id);
    const oldBoardIdx = gBoards.findIndex(board => board._id === oldBoard._id);
    gBoards.splice(oldBoardIdx, 1, newBoard);

    return storageService.put(STORAGE_KEY, newBoard);
  } else {
    // Add
    return storageService.post(STORAGE_KEY, newBoard);
  }
}

function _saveBoardsToStorage(boards) {
  storageService.saveToStorage(STORAGE_KEY, boards);
}

function _setBoardsToStorage() {
  let boards = storageService.loadFromStorage(STORAGE_KEY);
  if (!boards || !boards.length) {
    boards = DUMMY_BOARDS;
  }
  _saveBoardsToStorage(boards);
  return boards;
}

function addGroup(groupTitle, boardId) {
  const newGroup = {
    id: utilService.makeId(),
    title: groupTitle,
    tasks: [],
  };

  const board = gBoards.find(board => board._id === boardId);
  board.groups.push(newGroup);
  return storageService.put(STORAGE_KEY, board);
}

function addTask(taskTitle, groupId, boardId) {
  const taskToAdd = {
    id: utilService.makeId(),
    createdAt: Date.now(),
    title: taskTitle,
    style: {},
    description: '',
    dueDate: null,
    isDone: false,
    archiveAt: null,
    byMember: {
      _id: 'u101',
      imgUrl: 'url',
      fullname: 'Muki Pori',
      username: 'muki2',
    },
    checklists: [],
    labelIds: [],
    members: [],
    attachments: [],
  };

  const board = gBoards.find(board => board._id === boardId);
  const groupIdx = board.groups.findIndex(group => group.id === groupId);
  board.groups[groupIdx].tasks.push(taskToAdd);

  return storageService.put(STORAGE_KEY, board);
}

function addChecklist(title, groupId, board, taskId) {
  const checklistToAdd = {
    id: utilService.makeId(),
    title,
    todos: [],
  };
  const groupIdx = board.groups.findIndex(group => group.id === groupId);
  const taskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId);
  board.groups[groupIdx].tasks[taskIdx].checklists.push(checklistToAdd);
  return storageService.put(STORAGE_KEY, board);
}

// Finds the same task, and replace it - We need to send here the taskToUpdate!!!
function updateTask(boardId, groupId, taskId, taskToUpdate) {
  const board = gBoards.find(board => board._id === boardId);
  const groupIdx = board.groups.findIndex(group => group.id === groupId);
  const taskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId);
  board.groups[groupIdx].tasks.splice(taskIdx, 1, taskToUpdate);
  return storageService.put(STORAGE_KEY, board);
}

function addTodo(board, groupId, taskId, checklistId, title) {
  const todoToAdd = {
    id: utilService.makeId(),
    title,
    isDone: false,
  };
  const groupIdx = board.groups.findIndex(group => group.id === groupId);
  const taskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId);
  const checklistIdx = board.groups[groupIdx].tasks[taskIdx].checklists.findIndex(
    checklist => checklist.id === checklistId
  );
  board.groups[groupIdx].tasks[taskIdx].checklists[checklistIdx].todos.push(todoToAdd);
  return storageService.put(STORAGE_KEY, board);
}

function addFile(board, groupId, taskId, fileUrl) {
  const attachmentToAdd = {
    id: utilService.makeId(),
    name: 'Media url',
    url: fileUrl,
  };
  const groupIdx = board.groups.findIndex(group => group.id === groupId);
  const taskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId);
  board.groups[groupIdx].tasks[taskIdx].attachments.push(attachmentToAdd);
  return storageService.put(STORAGE_KEY, board);
}

// CR : CHECK OPTION TO USE IT
// export function updateTaskInBoard(board, updatedTask) {
//   board.groups.forEach(group => {
//     group.tasks.forEach((task, idx) => {
//       if (task.id === updatedTask.id) groups.tasks[idx] = updatedTask
//     })
//   })
//   return { ...board }
// }

export const boardService = {
  query,
  getById,
  getBoardsFromStorage,
  addGroup,
  save,
  queryImages,
  addTask,
  updateTask,
  addChecklist,
  addTodo,
  addFile,
};
