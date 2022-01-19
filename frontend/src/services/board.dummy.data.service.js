import { utilService } from './util.service.js'

const DUMMY_BOARDS = [
    {
        "_id": "b101",
        "title": "Board Title",
        "isPublic": false,
        "createdAt": 1589983468418,
        "createdBy": {
            "_id": "u101",
            "fullname": "Daniel Shaked",
            "imgUrl": "http://some-img"
        },
        "style": {
            background: 'url(https://images.unsplash.com/photo-1642590044683-d72bfab9eb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'
        },
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
                "id": utilService.makeId(),
                "title": "Group 1",
                "tasks": [
                    {
                        "id": utilService.makeId(),
                        "title": "We have to Replace the logo",
                        "description": "Replace logo",
                        "createdAt": Date.now(),
                        "labelIds": ["l101"],
                        "style": {

                            "backgroundColor": "red",
                            "backgroundImage": "url",
                            "isCover": false
                        },
                        "byMember": {
                            "_id": "u101",
                            "imgUrl": "url",
                            "fullname": "Muki Pori",
                            "username": "muki2",
                        },
                        "attachments": [
                            {
                                "id": utilService.makeId(),
                                "name": "Media url",
                                "url": "https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm",
                                "createdAt": Date.now()
                            }],
                        "members": [
                            {
                                "_id": "u101",
                                "imgUrl": "url",
                                "fullname": "Ori Ben Amram",
                                "username": "ori8",
                            },
                            {
                                "_id": "u102",
                                "imgUrl": "url",
                                "fullname": "Yuval Shai",
                                "username": "yuval22",
                            },
                            {
                                "_id": "u103",
                                "imgUrl": "url",
                                "fullname": "Daniel Shaked",
                                "username": "daniel98",
                            }],
                        "dueDate": 1589983468418,
                        "isDone": false,
                        "archiveAt": null
                    }
                ]
            }
        ],
        "activities": [
            {
                "id": utilService.makeId(),
                "txt": "Changed Color",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u101",
                    "fullname": "Abi Abambi",
                    "imgUrl": "http://some-img"
                },
                "task": {
                    "id": utilService.makeId(),
                    "title": "Replace Logo"
                }
            }
        ]
    },
    {
        "_id": "b545",
        "title": "Sprint4",
        "isPublic": false,
        "createdAt": 1589983468418,
        "createdBy": {
            "_id": "u545",
            "fullname": "Yuval Shai",
            "imgUrl": "https://www.google.com"
        },
        "style": { background: "url(https://images.unsplash.com/photo-1642547598615-6213315557aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60)" },
        "labels": [
            {
                "id": "l103",
                "title": "Done",
                "color": "#61bd4f"
            }
        ],
        "members": [
            {
                "_id": "u404",
                "fullname": "Daniel Shaked",
                "imgUrl": "https://www.google.com"
            }
        ],
        "groups": [
            {
                "id": utilService.makeId(),
                "title": "Group 1",
                "tasks": [
                    {
                        "id": utilService.makeId(),
                        "title": "We have to Replace the logo2",
                        "description": "Replace logo",
                        "createdAt": Date.now(),
                        "labelIds": ["l101"],
                        "style": {},
                        "byMember": {
                            "_id": "u101",
                            "imgUrl": "url",
                            "fullname": "Muki Pori",
                            "username": "muki2",
                        },
                        "attachments": [
                            {
                                "id": utilService.makeId(),
                                "name": "Media url",
                                "url": "https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm",
                                "createdAt": Date.now()
                            }],
                        "members": [
                            {
                                "_id": "u101",
                                "imgUrl": "url",
                                "fullname": "Ori Ben Amram",
                                "username": "ori8",
                            },
                            {
                                "_id": "u102",
                                "imgUrl": "url",
                                "fullname": "Yuval Shai",
                                "username": "yuval22",
                            },
                            {
                                "_id": "u103",
                                "imgUrl": "url",
                                "fullname": "Daniel Shaked",
                                "username": "daniel98",
                            }],
                        "dueDate": 1589983468418,
                        "isDone": false,
                        "archiveAt": null
                    }
                ]
            }
        ],
        "activities": [
            {
                "id": utilService.makeId(),
                "txt": "Changed Color",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u101",
                    "fullname": "Abi Abambi",
                    "imgUrl": "http://some-img"
                },
                "task": {
                    "id": utilService.makeId(),
                    "title": "Replace Logo"
                }
            }
        ]
    },
    {
        "_id": "b999",
        "title": "Sprint 5",
        "isPublic": false,
        "createdAt": 1589983468418,
        "createdBy": {
            "_id": "u109",
            "fullname": "Yuval Shai",
            "imgUrl": "https://www.google.com"
        },
        "style": { background: "url(https://images.unsplash.com/photo-1642548666500-7990b88e691f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60)" },
        "labels": [
            {
                "id": "l109",
                "title": "Done",
                "color": "#61bd4f"
            }
        ],
        "members": [
            {
                "_id": "u112",
                "fullname": "Daniel Shaked",
                "imgUrl": "https://www.google.com"
            }
        ],
        "groups": [
            {
                "id": utilService.makeId(),
                "title": "Group 1",
                "tasks": [
                    {
                        "id": utilService.makeId(),
                        "title": "We have to Replace the logo2",
                        "description": "Replace logo",
                        "createdAt": Date.now(),
                        "labelIds": ["l101"],
                        "style": {},
                        "byMember": {
                            "_id": "u101",
                            "imgUrl": "url",
                            "fullname": "Muki Pori",
                            "username": "muki2",
                        },
                        "attachments": [
                            {
                                "id": utilService.makeId(),
                                "name": "Media url",
                                "url": "https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm",
                                "createdAt": Date.now()
                            }],
                        "members": [
                            {
                                "_id": "u777",
                                "imgUrl": "url",
                                "fullname": "Ori Ben Amram",
                                "username": "ori8",
                            },
                            {
                                "_id": "u555",
                                "imgUrl": "url",
                                "fullname": "Yuval Shai",
                                "username": "yuval22",
                            },
                            {
                                "_id": "u999",
                                "imgUrl": "url",
                                "fullname": "Daniel Shaked",
                                "username": "daniel98",
                            }],
                        "dueDate": 1589983468418,
                        "isDone": false,
                        "archiveAt": null
                    }
                ]
            }
        ],
        "activities": [
            {
                "id": utilService.makeId(),
                "txt": "Changed Color",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u8211",
                    "fullname": "Abi Abambi",
                    "imgUrl": "http://some-img"
                },
                "task": {
                    "id": utilService.makeId(),
                    "title": "Replace Logo"
                }
            }
        ]
    },
    {
        "_id": "b156",
        "title": "Sprint 6",
        "isPublic": false,
        "createdAt": 1589983468418,
        "createdBy": {
            "_id": "u109",
            "fullname": "Yuval Shai",
            "imgUrl": "https://www.google.com"
        },
        "style": { background: "url(https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60)" },
        "labels": [
            {
                "id": "l562",
                "title": "Done",
                "color": "#61bd4f"
            }
        ],
        "members": [
            {
                "_id": "u6135",
                "fullname": "Daniel Shaked",
                "imgUrl": "https://www.google.com"
            }
        ],
        "groups": [
            {
                "id": utilService.makeId(),
                "title": "Group 1",
                "tasks": [
                    {
                        "id": utilService.makeId(),
                        "title": "We have to Replace the logo2",
                        "description": "Replace logo",
                        "createdAt": Date.now(),
                        "labelIds": ["l101"],
                        "style": {},
                        "byMember": {
                            "_id": "u101",
                            "imgUrl": "url",
                            "fullname": "Muki Pori",
                            "username": "muki2",
                        },
                        "attachments": [
                            {
                                "id": utilService.makeId(),
                                "name": "Media url",
                                "url": "https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm",
                                "createdAt": Date.now()
                            }],
                        "members": [
                            {
                                "_id": "u1545",
                                "imgUrl": "url",
                                "fullname": "Ori Ben Amram",
                                "username": "ori8",
                            },
                            {
                                "_id": "u35445",
                                "imgUrl": "url",
                                "fullname": "Yuval Shai",
                                "username": "yuval22",
                            },
                            {
                                "_id": "u54555",
                                "imgUrl": "url",
                                "fullname": "Daniel Shaked",
                                "username": "daniel98",
                            }],
                        "dueDate": 1589983468418,
                        "isDone": false,
                        "archiveAt": null
                    }
                ]
            }
        ],
        "activities": [
            {
                "id": utilService.makeId(),
                "txt": "Changed Color",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u8211",
                    "fullname": "Abi Abambi",
                    "imgUrl": "http://some-img"
                },
                "task": {
                    "id": utilService.makeId(),
                    "title": "Replace Logo"
                }
            }
        ]
    }

]

export default DUMMY_BOARDS;