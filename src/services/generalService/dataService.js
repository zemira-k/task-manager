import { Task, Member, Team } from '../../data/dummyData';
import { storageService } from './storageService';

export const dataService = {
  initData,
  removeData,
};

function initData() {
  storageService.newEntity('task', Task);
  storageService.newEntity('member', Member);
  storageService.newEntity('team', Team);
}

function removeData() {
  storageService.deleteStorage();
}
