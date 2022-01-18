export const storageService = {
  query,
  get,
  post,
  put,
  remove,
};


function query(entityType = "appDB", delay = 500) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || [];
  if(!entities?.length) entities = localStorage.setItem(entityType, JSON.stringify(_createDemoData()));

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(entities);
    }, delay);
  });
}

function get(entityType, entityId) {
  return query(entityType).then(entities => entities.find(entity => entity._id === entityId));
}
function post(entityType, newEntity) {
  newEntity._id = _makeId();
  return query(entityType).then(entities => {
    entities.push(newEntity);
    _save(entityType, entities);
    return newEntity;
  });
}

function put(entityType, updatedEntity) {
  return query(entityType).then(entities => {
    const idx = entities.findIndex(entity => entity._id === updatedEntity._id);
    entities.splice(idx, 1, updatedEntity);
    _save(entityType, entities);
    return updatedEntity;
  });
}

function remove(entityType, entityId) {
  return query(entityType).then(entities => {
    const idx = entities.findIndex(entity => entity._id === entityId);
    entities.splice(idx, 1);
    _save(entityType, entities);
  });
}

function _save(entityType, entities) {
  console.log('entityType FROM SAVE!', entityType);
  localStorage.setItem(entityType, JSON.stringify(entities));
}

function _makeId(length = 5) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}


function _createDemoData() {
  return {  "_id": "b101",
  "title": "Board Title",
  "isFavorite": false,
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
                  "labelIds": ["l908", "l909"],
                  "style": {
                      "id": "1202",
                      // Is that the right way, or should we marched it to the same key?
                      "bgClr": "red",
                      "bgImg": "url",
                      "coverMode": "full"
                  },
                  "byMember": {
                      "_id": "u101",
                      "imgUrl": "url",
                      "fullname": "muki",
                      "username": "muki pori",
                  },
                  "attachments": [
                      {
                          "id": "iVWjDl",
                          "name": "Media url",
                          "url": "https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm",
                          "createdAt": Date.now()
                      }],
                  "members": [
                      {
                          "_id": "u101",
                          "imgUrl": "url",
                          "fullname": "muki",
                          "username": "muki pori",
                      },
                      {
                          "_id": "u101",
                          "imgUrl": "url",
                          "fullname": "muki",
                          "username": "muki pori",
                      },
                      {
                          "_id": "u101",
                          "imgUrl": "url",
                          "fullname": "muki",
                          "username": "muki pori",
                      }],
                  "dueDate": {
                      "date": 1589983468418,
                      "isDone": false
                  },
                  "isArchive": false
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
}