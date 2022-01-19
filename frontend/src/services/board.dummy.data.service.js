import {utilService} from './util.service.js'

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
                        "fullname": "muki",
                        "username": "muki pori",
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
}
    
]

export default DUMMY_BOARDS;