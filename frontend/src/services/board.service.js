import { storageService } from './async-storage.service.js';
import DUMMY_BOARDS from './board.dummy.data.service';
import { utilService } from '../services/util.service.js';
import axios from 'axios'

const API_KEY_UNSPLASH = 'Nw9aD2jV-Yfb_bfoA37BqoleA2un9Nv68GDKeRed8Jk'

const STORAGE_KEY = 'boards';
const gBoards = _setBoardsToStorage();

function query() {
  return storageService.query(STORAGE_KEY);
}

async function queryImages(query = 'random') {
  const photos = await axios.get(`https://api.unsplash.com/search/photos/?query=${query}&client_id=${API_KEY_UNSPLASH}`)
  return photos.data.results
}

function getBoardsFromStorage() {
  const boards = storageService.loadFromStorage(STORAGE_KEY);
  return boards;
}

function getById(boardId) {
  return storageService.get(STORAGE_KEY, boardId);
}

function updateTask(boardId, groupId, taskId, taskToUpdate) {
  const board = gBoards.find(board => board._id === boardId);
  const groupIdx = board.groups.findIndex(group => group.id === groupId)
  const taskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId)
  board.groups[groupIdx].tasks.splice(taskIdx, 1, taskToUpdate)
  return storageService.put(STORAGE_KEY, board);
}


function save(board) {
  console.log('board:', board);

  if (board._id) {
    return storageService.put(STORAGE_KEY, board)
  } else {
    return storageService.post(STORAGE_KEY, board)
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
    members: [],
    attachments: [],
  };

  const board = gBoards.find(board => board._id === boardId);
  const groupIdx = board.groups.findIndex(group => group.id === groupId);
  board.groups[groupIdx].tasks.push(taskToAdd);

  return storageService.put(STORAGE_KEY, board);
}

// Finds the same task, and replace it - We need to send here the taskToUpdate!!!
function updateTask(boardId, groupId, taskId, taskToUpdate) {
  const board = gBoards.find(board => board._id === boardId);
  const groupIdx = board.groups.findIndex(group => group.id === groupId)
  const taskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId)
  board.groups[groupIdx].tasks.splice(taskIdx, 1, taskToUpdate)
  return storageService.put(STORAGE_KEY, board);
}


export const boardService = {
  query,
  getById,
  getBoardsFromStorage,
  addGroup,
  save,
  queryImages,
  addTask,
  updateTask
};

// const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
//             entities.splice(idx, 1, updatedEntity)