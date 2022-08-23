import { Task, Member } from '../../data/dummyData';
import { storageService } from './storageService';

export const dataService = {
  initData,
  removeData,
};

function initData() {
  storageService.newEntity('task', Task);
  storageService.newEntity('member', Member);
}

function removeData() {
  storageService.deleteStorage();
}
