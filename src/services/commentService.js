import { storageService } from './generalService/storageService';
export const commentService = {
  query,
  add,
  getById,
  remove,
  update,
};

const entityType = 'comment';

function query(filter = null) {
  let comments = storageService.query(entityType) || [];
  if (filter) comments = _filter(comments, filter);
  return comments;
}

function add(comment) {
  const newComment = storageService.post(entityType, comment);
  return newComment;
}

function getById(commentId) {
  const comment = storageService.getById(entityType, commentId);
  return comment;
}
function remove(commentId) {
  const newComments = storageService.remove(entityType, commentId);
  return newComments;
}
function update(commentToUpdate) {
  let updateComment = storageService.put(entityType, commentToUpdate);
  return updateComment;
}

// const filter1 = { done: true, priority: 2, time: new Date(), text: "goalkeeper" }
// const filter2 = { done: null, priority: 2, time: null, text: "goalkeeper" }
function _filter(comments, filter) {
  let filterComments = comments.filter(
    comment =>
      comment.priority >= filter.priority &&
      (comment.title.include(filter.text) || comment.desc.include(filter.text))
  );
  return filterComments;
}
