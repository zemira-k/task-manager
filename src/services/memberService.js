import { storageService } from './generalService/storageService';
export const memberService = {
  query,
  add,
  getById,
  remove,
  update,
  getEmptyMember,
};
const entityType = 'member';

function query(filter = null) {
  let members = storageService.query(entityType);
  if (filter) members = _filter(members, filter);
  return members;
}

function add(member) {
  const newMember = storageService.post(entityType, member);
  return newMember;
}

function getById(memberId) {
  const member = storageService.getById(entityType, memberId);
  return member;
}
function remove(memberId) {
  const newMembers = storageService.remove(entityType, memberId);
  return newMembers;
}
function update(member) {
  const updateMember = storageService.put(entityType, member);
  return updateMember;
}

function getEmptyMember() {
  return [
    {
      name: '',
      avatar: '',
      phone: '',
      mail: '',
      role: '',
      officalID: '',
      team: '',
    },
  ];
}

// const filter1 = { done: true, priority: 2, time: new Date(), text: "goalkeeper" }
// const filter2 = { done: null, priority: 2, time: null, text: "goalkeeper" }
function _filter(members, filter) {
  let filterMembers = members.filter(
    member =>
      filter.phone &&
      member.phone === filter.phone &&
      ((filter.name && member.name.include(filter.name)) ||
        (filter.role && member.role.include(filter.role)))
  );
  return filterMembers;
}
