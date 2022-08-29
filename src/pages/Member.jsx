import React, { useState } from 'react';

import { AddMember } from '../cmps/AddMember';
import sortIcon from '../assets/icons/sort.svg';
import filterIcon from '../assets/icons/filter.svg';
import { MemberTable } from '../cmps/MemberTable';

import { memberService } from '../services/memberService';

export const Member = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredMember, setFilteredMember] = useState({});
  let memberList = memberService.query();
  const buttons = [
    { title: 'filter', icon: sortIcon },
    { title: 'sort', icon: filterIcon },
  ];

  const handleAddMemberClick = () => {
    setFilteredMember(memberService.getEmptyMember);
    setIsOpen(true);
  };

  const handleEditMemberClick = event => {
    setFilteredMember(memberService.getById(event.target.value));
    setIsOpen(true);
  };

  const handleCloseAddMemberClick = () => {
    setIsOpen(false);
  };

  return (
    <section className="Members">
      <div className="left flex space-between align-center gap-1 mar-t-56">
        <div className="left flex align-center gap-1">
          <button
            className="members-add-button fs20 lh-35 br-10"
            onClick={handleAddMemberClick}
          >
            Add new member +
          </button>
          {buttons.map((button, i) => (
            <button
              key={i}
              className="members-filter-btn flex align-center justify-center br-50"
            >
              <div
                style={{
                  backgroundImage: `url(${button.icon})`,
                  width: `1.25rem`,
                  height: `1.5625rem`,
                  backgroundSize: `contain`,
                  marginRight: `0.5rem`,
                  backgroundRepeat: `no-repeat`,
                }}
              />
              {button.title}
            </button>
          ))}
        </div>
        <span>
          Showing <span className="bold">{memberList.length} members</span>
        </span>
      </div>
      <React.Fragment>
        <MemberTable
          members={memberList}
          handleEditMemberClick={handleEditMemberClick}
        />
      </React.Fragment>
      {isOpen && (
        <AddMember
          isOpen={isOpen}
          handleCloseAddMemberClick={handleCloseAddMemberClick}
          filteredMember={filteredMember}
        />
      )}
    </section>
  );
};
