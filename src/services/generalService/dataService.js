import { Task, Member, Team, Comment } from '../../data/dummyData';
import { storageService } from './storageService';

export const dataService = {
  initData,
  removeData,
};

function initData() {
  storageService.newEntity('task', Task);
  storageService.newEntity('member', Member);
  storageService.newEntity('team', Team);
  storageService.newEntity('comment', Comment);
}

function removeData() {
  storageService.deleteStorage();
}
