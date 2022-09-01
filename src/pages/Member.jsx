import { useState } from 'react';
import { MemberTable } from '../cmps/MemberTable';
import { memberService } from '../services/memberService';
import { AddMember } from '../cmps/AddMember';

export const Member = () => {
  const [members, setMembers] = useState(memberService.query());
  const [memberToUpdate, setMemberToUpdate] = useState(null);

  function onUpdateMember(memberToUpdate) {
    memberService.update(memberToUpdate);
    setMembers(prevMembers =>
      prevMembers.map(member => {
        if (member._id === memberToUpdate._id) return memberToUpdate;
        return member;
      })
    );
  }

  function onAddMember(memberToAdd) {
    memberService.add(memberToAdd);
    setMembers(prevMembers => [...prevMembers, memberToAdd]);
  }

  if (!members) return <div>loading..</div>;
  return (
    <section className="member-page main-page pad-1">
      <section className="actions left flex space-between align-center gap-1 mar-t-56">
        <div className="left flex align-center gap-1">
          <button
            className="members-add-button fs20 lh-35 br-10"
            onClick={() => setMemberToUpdate(memberService.getEmptyMember())}
          >
            Add new member +
          </button>
          <button className="members-filter-btn flex align-center justify-center br-50">
            <div className="filter-icon" />
            filter
          </button>
          <button className="members-sort-btn flex align-center justify-center br-50">
            <div className="sort-icon" />
            sort
          </button>
        </div>
        <span>
          Showing <span className="bold">{members.length} members</span>
        </span>
      </section>
      <MemberTable members={members} setMemberToUpdate={setMemberToUpdate} />
      {!!memberToUpdate && (
        <AddMember
          member={memberToUpdate}
          addMemberFn={onAddMember}
          updateMemberFn={onUpdateMember}
          closeModalFn={() => setMemberToUpdate(null)}
        />
      )}
    </section>
  );
};
