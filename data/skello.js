// Guidelines
// boardStore (no need for groupStore, taskStore), boardService
// *. Support saving the entire board and also on the task level, 
// PUT /api/board/b123/task/t678

//    (no need for seperate APIs for mini-updates of task parts like members or status)
// *. No need for saving an activities array per task, those activities are easily filtered from the board activities
// *. activites - when board is updated, the frontend does not send the activities array within the board 
//    instead it only sends a new activity object: {txt, boardId, groupId, taskId}
//    the backend adds this activity to the board with $push and can also emit socket notificatios
// *. D & D Guidelines - vue-smooth-dnd / vuedraggable / react-beutiful-dnd
// *. Same model for Monday style app (do not implement a generic columns feature)
// *. We do not handle concurrent editing - needs versioning

// Rendering performance:
// Store Mutation - saveBoard
// state.board = board
// Later, support switching a specific task


// <BoardDetails> => <BoardGroup v-for>
// <BoardGroup> => <TaskPreview v-for>
// <TaskDetails> (+edit) - initially can be loaded in seperate route (later on we can place it in a modal and nested route)



// Store - saveTask
function storeSaveTask(task, activity) {
    const activity = {
        "id": makeId(),
        "txt": "Changed Color",
        "createdAt": Date.now(),
        "byMember": userService.getLoggedinUser(),
        "task": task
    }
    board = boardService.saveTask(boardId, groupId, task, activity)
    commit(board)
}

// boardService
function saveTask(boardId, groupId, task, activity) {
    const board = getById(boardId)
    // TODO: find the task, and update
    board.activities.unshift(activity)
    saveBoard(board)
    return board
}

// boardStore-action
async function loadAndWatchBoard(boardId) {
    // load from service and commit to store
    // subscribe to socket and commit to store
}

// id from MongoDB - _id //

const board = {
    "_id": "b101",
    "title": "Board Title",
    "isPublic": false,
    "createdAt": 1589983468418,
    "createdBy": {
        "_id": "u101",
        "fullname": "Daniel Shaked",
        "imgUrl": "http://some-img"
    },
    "style": {},
    "labels": [
        {
            "id": "l101",
            "title": "Done",
            "color": "#61bd4f"
        }
    ],
    "members": [
        {
            "_id": "u101",
            "fullname": "Tal Tarablus",
            "imgUrl": "https://www.google.com"
        }
    ],
    "groups": [
        {
            "id": "g101",
            "title": "Group 1",
            "tasks": [
                {
                    "id": "c101",
                    "title": "We have to Replace the logo",
                    "description": "Replace logo",
                    "createdAt": Date.now(),
                    "labelIds": ["l101"],
                    "style": {
                        // "id": "1202",

                        // Is that the right way, or should we marched it to the same key?
                        "bgClr": "red",
                        "bgImg": "url",
                        "isCover": false
                    },
                    // we need all this data about the user?
                    "byMember": {
                        "_id": "u101",
                        "imgUrl": "url",
                        "fullname": "Muki Puri",
                        "username": "muki12",
                    },
                    "attachments": [
                        {
                            "id": "iVWjDl",
                            "name": "Media url",
                            "url": "url",
                            "createdAt": Date.now()
                        }],
                    "checklists": [
                        {
                            "id": "VXZcwp",
                            "title": "Checklist",
                            "todos": [
                                {
                                    "title": "Move tasks with drag & drop",
                                    "id": "I19Bt6",
                                    "isDone": true
                                },
                                {
                                    "title": "Move tasks with move action",
                                    "id": "k1wcOO",
                                    "isDone": true
                                },
                                {
                                    "title": "Copy tasks with copy action",
                                    "id": "6GlVmg",
                                    "isDone": true
                                }
                            ]
                        }
                    ],

                    "members": [
                        {
                            "_id": "u101",
                            "imgUrl": "url",
                            "fullname": "Muki Puri",
                            "username": "muki12",
                        },
                        {
                            "_id": "u101",
                            "imgUrl": "url",
                            "fullname": "Muki Puri",
                            "username": "muki12",
                        },
                        {
                            "_id": "u101",
                            "imgUrl": "url",
                            "fullname": "Muki Puri",
                            "username": "muki12",
                        }],
                    "dueDate": 1589983468418,
                    "archiveAt": null
                    // "isArchive": false

                    // {
                    //     "date": 
                    //     "status": "done"
                    // },
                }
            ]
        }
    ],
    "activities": [
        {
            "id": "a101",
            "txt": "Changed Color",
            "createdAt": 154514,
            "byMember": {
                "_id": "u101",
                "fullname": "Abi Abambi",
                "imgUrl": "http://some-img"
            },
            "task": {
                "id": "c101",
                "title": "Replace Logo"
            }
        }
    ]
}

const user = {
    "_id": "u101",
    "fullname": "Abi Abambi",
    "username": "abi@ababmi.com",
    "password": "aBambi123",
    "imgUrl": "http://some-img.jpg",
    // "mentions": [{
    //     "id": "m101",
    //     "boardId": "m101",
    //     "taskId": "t101"
    // }]
}