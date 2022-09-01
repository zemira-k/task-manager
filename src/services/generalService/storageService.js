export const storageService = {
  query,
  getById,
  post,
  put,
  remove,
  newEntity,
  deleteStorage,
};

function query(entityType) {
  const entities = JSON.parse(localStorage.getItem(entityType));
  return entities;
}

function getById(entityType, entityId) {
  return query(entityType).filter(el => el._id === entityId);
}

function post(entityType, newEntity) {
  newEntity._id = _makeId();
  const entities = query(entityType);
  entities.push(newEntity);
  _save(entityType, entities);
  return newEntity;
  // 1.get all entity
  // 2. add new object to entity
  //3. save new entity
}

function put(entityType, updateEntity) {
  const entities = query(entityType);
  const index = entities.findIndex(el => el._id === updateEntity._id);
  entities[index] = updateEntity;
  _save(entityType, entities);
  return updateEntity;
}

function remove(entityType, entityId) {
  const entities = query(entityType);
  const index = entities.findIndex(el => el._id === entityId);
  entities.splice(index, 1);
  _save(entityType, entities);
  return entities;
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}

function newEntity(entityType, entityArr) {
  _save(entityType, entityArr);
}

function deleteStorage() {
  localStorage.clear();
}

function _makeId(length = 5) {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
