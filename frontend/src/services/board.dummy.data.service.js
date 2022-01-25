import {utilService} from './util.service.js';

const DUMMY_BOARDS = [
  // Skello Board
  {
    _id: 'b101',
    title: 'Skello Demo',
    isStarred: true,
    isPublic: false,
    createdAt: null,
    createdBy: {
      _id: 'u101',
      fullname: 'Asaf Margalit',
      imgUrl: 'http://some-img',
    },
    style: {
      background:
        'url(https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    },
    // "areLabelsOpen" : false,
    labels: [
      // green
      {
        id: 'l101',
        title: 'daniel',
        color: '#61bd4f',
      },
      // yellow
      {
        id: 'l102',
        title: '',
        color: '#f2d600',
      },
      // orange
      {
        id: 'l103',
        title: 'done',
        color: '#ff9f1a',
      },
      // red
      {
        id: 'l104',
        title: '',
        color: '#eb5a46',
      },
      // purple
      {
        id: 'l105',
        title: 'yuval',
        color: '#c377e0',
      },
      // blue
      {
        id: 'l106',
        title: 'ori',
        color: '#0079bf',
      },
    ],
    members: [
      {
        _id: 'u101',
        fullname: 'Asaf Margalit',
        imgUrl: 'https://www.google.com',
      },
      {
        _id: 'u102',
        fullname: 'Harry Potter',
        imgUrl: 'https://www.google.com',
      },
      {
        _id: 'u103',
        fullname: 'Zinadin Zidan',
        imgUrl: 'https://www.google.com',
      },
    ],
    groups: [
      // Backlog
      {
        id: utilService.makeId(),
        title: 'Backlog',
        tasks: [
          // App UI
          {
            id: utilService.makeId(),
            title: 'App UI',
            description: 'Create nested task details page, with dark overflow',
            createdAt: Date.now(),
            labelIds: ['l101', 'l102', 'l106'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            byMember: {
              _id: 'u103',
              // TODO
              imgUrl: 'url',
              fullname: 'Zinadin Zidan',
              username: 'zinadin.bold@gmail.com',
            },
            attachments: [
              {
                id: utilService.makeId(),
                name: 'Media url',
                url: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80',
                createdAt: Date.now(),
              },
            ],
            checklists: [
              {
                id: 'VXZcwp',
                title: 'Ori The King',
                todos: [
                  {
                    title: 'read about d&d',
                    id: 'b1998',
                    isDone: true,
                  },
                  {
                    title: 'build checkList & todos',
                    id: 'b1997',
                    isDone: false,
                  },
                  {
                    title: 'add labels',
                    id: 'b1212',
                    isDone: true,
                  },
                ],
              },
            ],
            members: [
              {
                _id: 'u104',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
                color: '#3a637a',
              },
              {
                _id: 'u102',
                imgUrl: 'url',
                fullname: 'Yuval Shai',
                username: 'yuval22',
                color: '#5d3270',
              },
              {
                _id: 'u103',
                imgUrl: 'url',
                fullname: 'Daniel Shaked',
                username: 'daniel98',
                color: '#296c41',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
          // Add login
          {
            id: utilService.makeId(),
            title: 'Add login,and register page with email',
            description: 'Covers are great thing to work on',
            createdAt: Date.now(),
            labelIds: ['l104'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
                title: 'kayak'
              },
              isCover: true,
              isTextDarkMode: true
            },
            byMember: {
              _id: 'u103',
              // TODO
              imgUrl: 'url',
              fullname: 'Zinadin Zidan',
              username: 'zinadin.bold@gmail.com',
            },
            attachments: [],
            checklists: [],
            members: [
              {
                _id: 'u104',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
                color: '#3a637a',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
        ],
      },
      // Development
      {
        id: utilService.makeId(),
        title: 'Development',
        tasks: [
          // Create git
          {
            id: utilService.makeId(),
            title: `Test for Cover!!!!`,
            description: 'create git repo',
            createdAt: Date.now(),
            labelIds: ['l102'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            byMember: {
              _id: 'u103',
              // TODO
              imgUrl: 'url',
              fullname: 'Zinadin Zidan',
              username: 'zinadin.bold@gmail.com',
            },
            attachments: [
              {
                id: utilService.makeId(),
                name: 'Media url',
                url: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80',
                createdAt: Date.now(),
              },
            ],
            checklists: [
              {
                id: 'VXZcwp',
                title: 'Ori The King',
                todos: [
                  {
                    title: 'read about d&d',
                    id: 'b1998',
                    isDone: true,
                  },
                  {
                    title: 'build checkList & todos',
                    id: 'b1997',
                    isDone: false,
                  },
                  {
                    title: 'add labels',
                    id: 'b1212',
                    isDone: true,
                  },
                ],
              },
            ],
            members: [
              {
                _id: 'u104',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
                color: '#3a637a',
              },
              {
                _id: 'u102',
                imgUrl: 'url',
                fullname: 'Yuval Shai',
                username: 'yuval22',
                color: '#5d3270',
              },
              {
                _id: 'u103',
                imgUrl: 'url',
                fullname: 'Daniel Shaked',
                username: 'daniel98',
                color: '#296c41',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
          // Support DND
          {
            id: utilService.makeId(),
            title: 'Support Drag and Drop with react lib',
            description: 'Support Drag and Drop with react lib',
            createdAt: Date.now(),
            labelIds: ['l104'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            byMember: {
              _id: 'u103',
              // TODO
              imgUrl: 'url',
              fullname: 'Zinadin Zidan',
              username: 'zinadin.bold@gmail.com',
            },
            attachments: [
              {
                id: utilService.makeId(),
                name: 'Media url',
                url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                createdAt: Date.now(),
              },
            ],
            checklists: [],
            members: [
              {
                _id: 'u104',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
                color: '#3a637a',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
        ],
      },
      // Style
      {
        id: utilService.makeId(),
        title: 'Style',
        tasks: [
          // Design new logo
          {
            id: utilService.makeId(),
            title: 'Design new logo',
            description: 'Design new logo',
            createdAt: Date.now(),
            labelIds: ['l101', 'l102'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            byMember: {
              _id: 'u103',
              // TODO
              imgUrl: 'url',
              fullname: 'Zinadin Zidan',
              username: 'zinadin.bold@gmail.com',
            },
            attachments: [],
            checklists: [
              {
                id: 'VXZcwp',
                title: 'Ori The King',
                todos: [
                  {
                    title: 'read about d&d',
                    id: 'b1998',
                    isDone: true,
                  },
                  {
                    title: 'build checkList & todos',
                    id: 'b1997',
                    isDone: false,
                  },
                  {
                    title: 'add labels',
                    id: 'b1212',
                    isDone: true,
                  },
                ],
              },
            ],
            members: [
              {
                _id: 'u104',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
                color: '#3a637a',
              },
              {
                _id: 'u102',
                imgUrl: 'url',
                fullname: 'Yuval Shai',
                username: 'yuval22',
                color: '#5d3270',
              },
              {
                _id: 'u103',
                imgUrl: 'url',
                fullname: 'Daniel Shaked',
                username: 'daniel98',
                color: '#296c41',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
          // Transform all css
          {
            id: utilService.makeId(),
            title: 'Transform all css into scss files as soon as possible',
            description: 'Transform all css into scss files as soon as possible',
            createdAt: Date.now(),
            labelIds: ['l104', 'l106'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            byMember: {
              _id: 'u103',
              // TODO
              imgUrl: 'url',
              fullname: 'Zinadin Zidan',
              username: 'zinadin.bold@gmail.com',
            },
            attachments: [
              {
                id: utilService.makeId(),
                name: 'Media url',
                url: 'https://silvawebdesigns.com/wp-content/uploads/2020/10/useful-sass-scss-mixins-for-every-website.jpg',
                createdAt: Date.now(),
              },
            ],
            checklists: [],
            members: [
              {
                _id: 'u104',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
                color: '#3a637a',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
          // Change main-layout
          {
            id: utilService.makeId(),
            title: 'Change main-layout in home page and re-style footer',
            description: 'Change main-layout in home page and re-style footer',
            createdAt: Date.now(),
            labelIds: ['l103'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            byMember: {
              _id: 'u103',
              // TODO
              imgUrl: 'url',
              fullname: 'Zinadin Zidan',
              username: 'zinadin.bold@gmail.com',
            },
            attachments: [],
            checklists: [],
            members: [
              {
                _id: 'u104',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
                color: '#3a637a',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
        ],
      },
      // Code Review
      {
        id: utilService.makeId(),
        title: 'Code Review',
        tasks: [
          // user delete board
          {
            id: utilService.makeId(),
            title: 'User should be able to delete board,groups and tasks',
            description: 'Create nested task details page, with dark overflow',
            createdAt: Date.now(),
            labelIds: ['l105'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              // isTextDarkMode: true
            },
            byMember: {
              _id: 'u103',
              // TODO
              imgUrl: 'url',
              fullname: 'Zinadin Zidan',
              username: 'zinadin.bold@gmail.com',
            },
            attachments: [],
            checklists: [
              {
                id: 'VXZcwp',
                title: 'Ori The King',
                todos: [
                  {
                    title: 'read about d&d',
                    id: 'b1998',
                    isDone: true,
                  },
                  {
                    title: 'build checkList & todos',
                    id: 'b1997',
                    isDone: false,
                  },
                  {
                    title: 'add labels',
                    id: 'b1212',
                    isDone: true,
                  },
                ],
              },
            ],
            members: [
              {
                _id: 'u104',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
                color: '#3a637a',
              },
              {
                _id: 'u102',
                imgUrl: 'url',
                fullname: 'Yuval Shai',
                username: 'yuval22',
                color: '#5d3270',
              },
              {
                _id: 'u103',
                imgUrl: 'url',
                fullname: 'Daniel Shaked',
                username: 'daniel98',
                color: '#296c41',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
          // User add tag
          {
            id: utilService.makeId(),
            title: 'User should be able to tag other members in tasks',
            description: 'Add login,and register page with email,username and password',
            createdAt: Date.now(),
            labelIds: ['l103'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            byMember: {
              _id: 'u103',
              // TODO
              imgUrl: 'url',
              fullname: 'Zinadin Zidan',
              username: 'zinadin.bold@gmail.com',
            },
            attachments: [],
            checklists: [],
            members: [
              {
                _id: 'u104',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
                color: '#3a637a',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
          // MongoDB
          {
            id: utilService.makeId(),
            title: 'Store all information in MongoDB and check collections',
            description: 'Store all information in MongoDB and check collections',
            createdAt: Date.now(),
            labelIds: ['l104', 'l103'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            byMember: {
              _id: 'u103',
              // TODO
              imgUrl: 'url',
              fullname: 'Zinadin Zidan',
              username: 'zinadin.bold@gmail.com',
            },
            attachments: [
              {
                id: utilService.makeId(),
                name: 'Media url',
                url: 'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png',
                createdAt: Date.now(),
              },
            ],
            checklists: [],
            members: [
              {
                _id: 'u104',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
                color: '#3a637a',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
        ],
      },
      // QA
      {
        id: utilService.makeId(),
        title: 'QA',
        tasks: [
          // Logout problem
          {
            id: utilService.makeId(),
            title: 'Problem in logout on server side, session is not stored',
            description: 'Problem in logout on server side, session is not stored',
            createdAt: Date.now(),
            labelIds: ['l106', 'l105'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            byMember: {
              _id: 'u103',
              // TODO
              imgUrl: 'url',
              fullname: 'Zinadin Zidan',
              username: 'zinadin.bold@gmail.com',
            },
            attachments: [],
            checklists: [
              {
                id: 'VXZcwp',
                title: 'Ori The King',
                todos: [
                  {
                    title: 'read about d&d',
                    id: 'b1998',
                    isDone: true,
                  },
                  {
                    title: 'build checkList & todos',
                    id: 'b1997',
                    isDone: false,
                  },
                  {
                    title: 'add labels',
                    id: 'b1212',
                    isDone: true,
                  },
                ],
              },
            ],
            members: [
              {
                _id: 'u104',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
                color: '#3a637a',
              },
              {
                _id: 'u102',
                imgUrl: 'url',
                fullname: 'Yuval Shai',
                username: 'yuval22',
                color: '#5d3270',
              },
              {
                _id: 'u103',
                imgUrl: 'url',
                fullname: 'Daniel Shaked',
                username: 'daniel98',
                color: '#296c41',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
          // Change Ccover
          {
            id: utilService.makeId(),
            title: 'Change cover directly from task details',
            description: 'Change cover directly from task details',
            createdAt: Date.now(),
            labelIds: [],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            byMember: {
              _id: 'u103',
              // TODO
              imgUrl: 'url',
              fullname: 'Zinadin Zidan',
              username: 'zinadin.bold@gmail.com',
            },
            attachments: [],
            checklists: [
              {
                id: 'VXZcwp',
                title: 'Ori The King',
                todos: [
                  {
                    title: 'read about d&d',
                    id: 'b1998',
                    isDone: true,
                  },
                  {
                    title: 'build checkList & todos',
                    id: 'b1997',
                    isDone: false,
                  },
                  {
                    title: 'add labels',
                    id: 'b1212',
                    isDone: true,
                  },
                ],
              },
            ],
            members: [
              {
                _id: 'u104',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
                color: '#3a637a',
              },
              {
                _id: 'u102',
                imgUrl: 'url',
                fullname: 'Yuval Shai',
                username: 'yuval22',
                color: '#5d3270',
              },
              {
                _id: 'u103',
                imgUrl: 'url',
                fullname: 'Daniel Shaked',
                username: 'daniel98',
                color: '#296c41',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
          // Change background image
          {
            id: utilService.makeId(),
            title: 'Change background image',
            description: 'Change background image',
            createdAt: Date.now(),
            labelIds: ['l101', 'l102'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            byMember: {
              _id: 'u103',
              // TODO
              imgUrl: 'url',
              fullname: 'Zinadin Zidan',
              username: 'zinadin.bold@gmail.com',
            },
            attachments: [],
            checklists: [
              {
                id: 'VXZcwp',
                title: 'Ori The King',
                todos: [
                  {
                    title: 'read about d&d',
                    id: 'b1998',
                    isDone: true,
                  },
                  {
                    title: 'build checkList & todos',
                    id: 'b1997',
                    isDone: false,
                  },
                  {
                    title: 'add labels',
                    id: 'b1212',
                    isDone: true,
                  },
                ],
              },
            ],
            members: [
              {
                _id: 'u104',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
                color: '#3a637a',
              },
              {
                _id: 'u102',
                imgUrl: 'url',
                fullname: 'Yuval Shai',
                username: 'yuval22',
                color: '#5d3270',
              },
              {
                _id: 'u103',
                imgUrl: 'url',
                fullname: 'Daniel Shaked',
                username: 'daniel98',
                color: '#296c41',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
        ],
      },
      // Done
      {
        id: utilService.makeId(),
        title: 'Done',
        tasks: [],
      },
      // Funny/Motivation
      {
        id: utilService.makeId(),
        title: 'Funny/Motivation',
        tasks: [
          // Meme
          {
            id: utilService.makeId(),
            title: 'Wise words',
            description: 'Wise words',
            createdAt: Date.now(),
            labelIds: [],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            byMember: {
              _id: 'u103',
              // TODO
              imgUrl: 'url',
              fullname: 'Zinadin Zidan',
              username: 'zinadin.bold@gmail.com',
            },
            attachments: [
              {
                id: utilService.makeId(),
                name: 'Media url',
                url: 'https://i.redd.it/8ba2g2q00rd71.png',
                createdAt: Date.now(),
              },
            ],
            checklists: [],
            members: [
              {
                _id: 'u104',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
                color: '#3a637a',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
        ],
      },
    ],
    activities: [],
  },
  // Sprint 4
  {
    _id: 'b545',
    isStarred: false,
    title: 'Sprint4',
    isPublic: false,
    createdAt: null,
    createdBy: {
      _id: 'u545',
      fullname: 'Yuval Shai',
      imgUrl: 'https://www.google.com',
    },
    style: {
      background:
        'url(https://images.unsplash.com/photo-1642547598615-6213315557aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60)',
    },
    labels: [
      {
        id: 'l103',
        title: 'Done',
        color: '#61bd4f',
      },
    ],
    members: [
      {
        _id: 'u404',
        fullname: 'Daniel Shaked',
        imgUrl: 'https://www.google.com',
        color: 'blue',
      },
    ],
    groups: [
      {
        id: utilService.makeId(),
        title: 'Group 1',
        tasks: [
          {
            id: utilService.makeId(),
            title: 'We have to Replace the logo2',
            description: 'Replace logo',
            createdAt: Date.now(),
            labelIds: ['l101'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            attachments: [
              {
                id: utilService.makeId(),
                name: 'Media url',
                url: 'https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm',
                createdAt: Date.now(),
              },
            ],
            members: [
              {
                _id: 'u101',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
              },
              {
                _id: 'u102',
                imgUrl: 'url',
                fullname: 'Yuval Shai',
                username: 'yuval22',
              },
              {
                _id: 'u103',
                imgUrl: 'url',
                fullname: 'Daniel Shaked',
                username: 'daniel98',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
        ],
      },
    ],
    activities: [
      {
        id: utilService.makeId(),
        txt: 'Moved this card from Todo to Doing',
        createdAt: 154514,
        byMember: {
          _id: 'u101',
          fullname: 'Abi Abambi',
          imgUrl: 'http://some-img',
        },
        task: {
          id: utilService.makeId(),
          title: 'Replace Logo',
        },
      },
    ],
  },
  // Sprint 5
  {
    _id: 'b999',
    isStarred: false,
    title: 'Sprint 5',
    isPublic: false,
    createdAt: null,
    createdBy: {
      _id: 'u109',
      fullname: 'Yuval Shai',
      imgUrl: 'https://www.google.com',
    },
    style: {
      background:
        'url(https://images.unsplash.com/photo-1642548666500-7990b88e691f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60)',
    },
    labels: [
      {
        id: 'l109',
        title: 'Done',
        color: '#61bd4f',
      },
    ],
    members: [
      {
        _id: 'u112',
        fullname: 'Daniel Shaked',
        imgUrl: 'https://www.google.com',
      },
    ],
    groups: [
      {
        id: utilService.makeId(),
        title: 'Group 1',
        tasks: [
          {
            id: utilService.makeId(),
            title: 'We have to Replace the logo2',
            description: 'Replace logo',
            createdAt: Date.now(),
            labelIds: ['l101'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            attachments: [
              {
                id: utilService.makeId(),
                name: 'Media url',
                url: 'https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm',
                createdAt: Date.now(),
              },
            ],
            members: [
              {
                _id: 'u777',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
              },
              {
                _id: 'u555',
                imgUrl: 'url',
                fullname: 'Yuval Shai',
                username: 'yuval22',
              },
              {
                _id: 'u999',
                imgUrl: 'url',
                fullname: 'Daniel Shaked',
                username: 'daniel98',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
        ],
      },
    ],
    activities: [
      {
        id: utilService.makeId(),
        txt: 'Changed Color',
        createdAt: 154514,
        byMember: {
          _id: 'u8211',
          fullname: 'Abi Abambi',
          imgUrl: 'http://some-img',
        },
        task: {
          id: utilService.makeId(),
          title: 'Replace Logo',
        },
      },
    ],
  },
  // Sprint 6
  {
    _id: 'b156',
    isStarred: false,
    title: 'Sprint 6',
    isPublic: false,
    createdAt: null,
    createdBy: {
      _id: 'u109',
      fullname: 'Yuval Shai',
      imgUrl: 'https://www.google.com',
    },
    style: {
      background:
        'url(https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60)',
    },
    labels: [
      {
        id: 'l562',
        title: 'Done',
        color: '#61bd4f',
      },
    ],
    members: [
      {
        _id: 'u6135',
        fullname: 'Daniel Shaked',
        imgUrl: 'https://www.google.com',
      },
    ],
    groups: [
      {
        id: utilService.makeId(),
        title: 'Group 1',
        tasks: [
          {
            id: utilService.makeId(),
            title: 'We have to Replace the logo2',
            description: 'Replace logo',
            createdAt: Date.now(),
            labelIds: ['l101'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            attachments: [
              {
                id: utilService.makeId(),
                name: 'Media url',
                url: 'https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm',
                createdAt: Date.now(),
              },
            ],
            members: [
              {
                _id: 'u1545',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
              },
              {
                _id: 'u35445',
                imgUrl: 'url',
                fullname: 'Yuval Shai',
                username: 'yuval22',
              },
              {
                _id: 'u54555',
                imgUrl: 'url',
                fullname: 'Daniel Shaked',
                username: 'daniel98',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
        ],
      },
    ],
    activities: [
      {
        id: utilService.makeId(),
        txt: 'Changed Color',
        createdAt: 154514,
        byMember: {
          _id: 'u8211',
          fullname: 'Abi Abambi',
          imgUrl: 'http://some-img',
        },
        task: {
          id: utilService.makeId(),
          title: 'Replace Logo',
        },
      },
    ],
  },
  // Vacation
  {
    _id: 'b888',
    isStarred: false,
    title: 'Vacation',
    isPublic: false,
    createdAt: null,
    createdBy: {
      _id: 'u109',
      fullname: 'Yuval Shai',
      imgUrl: 'https://www.google.com',
    },
    style: {
      background:
        'url(https://images.unsplash.com/photo-1552082919-e60010758c47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    },
    labels: [
      {
        id: 'l562',
        title: 'Done',
        color: '#61bd4f',
      },
    ],
    members: [
      {
        _id: 'u6135',
        fullname: 'Daniel Shaked',
        imgUrl: 'https://www.google.com',
      },
    ],
    groups: [
      {
        id: utilService.makeId(),
        title: 'Group 1',
        tasks: [
          {
            id: utilService.makeId(),
            title: 'We have to Replace the logo2',
            description: 'Replace logo',
            createdAt: Date.now(),
            labelIds: ['l101'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            attachments: [
              {
                id: utilService.makeId(),
                name: 'Media url',
                url: 'https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm',
                createdAt: Date.now(),
              },
            ],
            members: [
              {
                _id: 'u1545',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
              },
              {
                _id: 'u35445',
                imgUrl: 'url',
                fullname: 'Yuval Shai',
                username: 'yuval22',
              },
              {
                _id: 'u54555',
                imgUrl: 'url',
                fullname: 'Daniel Shaked',
                username: 'daniel98',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
        ],
      },
    ],
    activities: [
      {
        id: utilService.makeId(),
        txt: 'Changed Color',
        createdAt: 154514,
        byMember: {
          _id: 'u8211',
          fullname: 'Abi Abambi',
          imgUrl: 'http://some-img',
        },
        task: {
          id: utilService.makeId(),
          title: 'Replace Logo',
        },
      },
    ],
  },
  // Games
  {
    _id: 'b777',
    isStarred: false,
    title: 'Games',
    isPublic: false,
    createdAt: null,
    createdBy: {
      _id: 'u109',
      fullname: 'Yuval Shai',
      imgUrl: 'https://www.google.com',
    },
    style: {
      background:
        'url(https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)',
    },
    labels: [
      {
        id: 'l562',
        title: 'Done',
        color: '#61bd4f',
      },
    ],
    members: [
      {
        _id: 'u6135',
        fullname: 'Daniel Shaked',
        imgUrl: 'https://www.google.com',
      },
    ],
    groups: [
      {
        id: utilService.makeId(),
        title: 'Group 1',
        tasks: [
          {
            id: utilService.makeId(),
            title: 'We have to Replace the logo2',
            description: 'Replace logo',
            createdAt: Date.now(),
            labelIds: ['l101'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            attachments: [
              {
                id: utilService.makeId(),
                name: 'Media url',
                url: 'https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm',
                createdAt: Date.now(),
              },
            ],
            members: [
              {
                _id: 'u1545',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
              },
              {
                _id: 'u35445',
                imgUrl: 'url',
                fullname: 'Yuval Shai',
                username: 'yuval22',
              },
              {
                _id: 'u54555',
                imgUrl: 'url',
                fullname: 'Daniel Shaked',
                username: 'daniel98',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
        ],
      },
    ],
    activities: [
      {
        id: utilService.makeId(),
        txt: 'Changed Color',
        createdAt: 154514,
        byMember: {
          _id: 'u8211',
          fullname: 'Abi Abambi',
          imgUrl: 'http://some-img',
        },
        task: {
          id: utilService.makeId(),
          title: 'Replace Logo',
        },
      },
    ],
  },
  // School Project
  {
    _id: 'b666',
    isStarred: false,
    title: 'School Project',
    isPublic: false,
    createdAt: null,
    createdBy: {
      _id: 'u109',
      fullname: 'Yuval Shai',
      imgUrl: 'https://www.google.com',
    },
    style: {
      background:
        'url(https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)',
    },
    labels: [
      {
        id: 'l562',
        title: 'Done',
        color: '#61bd4f',
      },
    ],
    members: [
      {
        _id: 'u6135',
        fullname: 'Daniel Shaked',
        imgUrl: 'https://www.google.com',
      },
    ],
    groups: [
      {
        id: utilService.makeId(),
        title: 'Group 1',
        tasks: [
          {
            id: utilService.makeId(),
            title: 'We have to Replace the logo2',
            description: 'Replace logo',
            createdAt: Date.now(),
            labelIds: ['l101'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            attachments: [
              {
                id: utilService.makeId(),
                name: 'Media url',
                url: 'https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm',
                createdAt: Date.now(),
              },
            ],
            members: [
              {
                _id: 'u1545',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
              },
              {
                _id: 'u35445',
                imgUrl: 'url',
                fullname: 'Yuval Shai',
                username: 'yuval22',
              },
              {
                _id: 'u54555',
                imgUrl: 'url',
                fullname: 'Daniel Shaked',
                username: 'daniel98',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
        ],
      },
    ],
    activities: [
      {
        id: utilService.makeId(),
        txt: 'Changed Color',
        createdAt: 154514,
        byMember: {
          _id: 'u8211',
          fullname: 'Abi Abambi',
          imgUrl: 'http://some-img',
        },
        task: {
          id: utilService.makeId(),
          title: 'Replace Logo',
        },
      },
    ],
  },
  // Gym Ideas
  {
    _id: 'b555',
    isStarred: false,
    title: 'Gym Ideas',
    isPublic: false,
    createdAt: null,
    createdBy: {
      _id: 'u109',
      fullname: 'Yuval Shai',
      imgUrl: 'https://www.google.com',
    },
    style: {
      background: 'rgb(65, 195, 65)',
    },
    labels: [
      {
        id: 'l562',
        title: 'Done',
        color: '#61bd4f',
      },
    ],
    members: [
      {
        _id: 'u6135',
        fullname: 'Daniel Shaked',
        imgUrl: 'https://www.google.com',
      },
    ],
    groups: [
      {
        id: utilService.makeId(),
        title: 'Group 1',
        tasks: [
          {
            id: utilService.makeId(),
            title: 'We have to Replace the logo2',
            description: 'Replace logo',
            createdAt: Date.now(),
            labelIds: ['l101'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            byMember: {
              _id: 'u101',
              imgUrl: 'url',
              fullname: 'Muki Pori',
              username: 'muki2',
            },
            attachments: [
              {
                id: utilService.makeId(),
                name: 'Media url',
                url: 'https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm',
                createdAt: Date.now(),
              },
            ],
            members: [
              {
                _id: 'u1545',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
              },
              {
                _id: 'u35445',
                imgUrl: 'url',
                fullname: 'Yuval Shai',
                username: 'yuval22',
              },
              {
                _id: 'u54555',
                imgUrl: 'url',
                fullname: 'Daniel Shaked',
                username: 'daniel98',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
        ],
      },
    ],
    activities: [
      {
        id: utilService.makeId(),
        txt: 'Changed Color',
        createdAt: 154514,
        byMember: {
          _id: 'u8211',
          fullname: 'Abi Abambi',
          imgUrl: 'http://some-img',
        },
        task: {
          id: utilService.makeId(),
          title: 'Replace Logo',
        },
      },
    ],
  },
  // My Todos
  {
    _id: 'b444',
    isStarred: false,
    title: 'My Todos',
    isPublic: false,
    createdAt: null,
    createdBy: {
      _id: 'u109',
      fullname: 'Yuval Shai',
      imgUrl: 'https://www.google.com',
    },
    style: {
      background: '#CB108D',
    },
    labels: [
      {
        id: 'l562',
        title: 'Done',
        color: '#61bd4f',
      },
    ],
    members: [
      {
        _id: 'u6135',
        fullname: 'Daniel Shaked',
        imgUrl: 'https://www.google.com',
      },
    ],
    groups: [
      {
        id: utilService.makeId(),
        title: 'Group 1',
        tasks: [
          {
            id: utilService.makeId(),
            title: 'We have to Replace the logo2',
            description: 'Replace logo',
            createdAt: Date.now(),
            labelIds: ['l101'],
            style: {
              backgroundColor: null,
              backgroundImage: {
                url: null,
                title: null
              },
              isCover: false,
              isTextDarkMode: true
            },
            byMember: {
              _id: 'u101',
              imgUrl: 'url',
              fullname: 'Muki Pori',
              username: 'muki2',
            },
            attachments: [
              {
                id: utilService.makeId(),
                name: 'Media url',
                url: 'https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm',
                createdAt: Date.now(),
              },
            ],
            members: [
              {
                _id: 'u1545',
                imgUrl: 'url',
                fullname: 'Ori Ben Amram',
                username: 'ori8',
              },
              {
                _id: 'u35445',
                imgUrl: 'url',
                fullname: 'Yuval Shai',
                username: 'yuval22',
              },
              {
                _id: 'u54555',
                imgUrl: 'url',
                fullname: 'Daniel Shaked',
                username: 'daniel98',
              },
            ],
            dueDate: null,
            isDone: false,
            archiveAt: null,
          },
        ],
      },
    ],
    activities: [
      {
        id: utilService.makeId(),
        txt: 'Changed Color',
        createdAt: 154514,
        byMember: {
          _id: 'u8211',
          fullname: 'Abi Abambi',
          imgUrl: 'http://some-img',
        },
        task: {
          id: utilService.makeId(),
          title: 'Replace Logo',
        },
      },
    ],
  },
];

export default DUMMY_BOARDS;
