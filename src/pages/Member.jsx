import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AddMember } from '../cmps/AddMember';
import sortIcon from '../assets/icons/sort.svg';
import filterIcon from '../assets/icons/filter.svg';
import smallBurger from '../assets/icons/smallBurger.svg';

import { memberService } from '../services/memberService';

export const Member = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredMember, setFilteredMember] = useState({});
  let memberList = memberService.query();

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
          <button className="members-filter-btn flex align-center justify-center br-50">
            <div
              style={{
                backgroundImage: `url(${filterIcon})`,
                width: `20px`,
                height: `25px`,
                backgroundSize: `contain`,
              }}
            />
            filter
          </button>
          <button className="members-sort-btn flex align-center justify-center br-50">
            <div
              style={{
                backgroundImage: `url(${sortIcon})`,
                width: `20px`,
                height: `25px`,
                backgroundSize: `contain`,
              }}
            />
            sort
          </button>
        </div>
        <span>
          Showing <span className="bold">{memberList.length} members</span>
        </span>
      </div>
      <React.Fragment>
        <Table size="small" className="mar-t-63">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell className="table-header">Full name</TableCell>
              <TableCell className="table-header">Phone number</TableCell>
              <TableCell className="table-header">Team</TableCell>
              <TableCell className="table-header">Start time</TableCell>
              <TableCell className="table-header">End time</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {memberList.map(member => (
              <TableRow key={member._id}>
                <TableCell className="table-content">
                  <div
                    style={{
                      backgroundImage: `url(${member.avatar})`,
                      width: `24px`,
                      height: `24px`,
                      backgroundSize: `contain`,
                      borderRadius: `50%`,
                    }}
                  />
                </TableCell>
                <TableCell className="table-content">{member.name}</TableCell>
                <TableCell className="table-content">{member.phone}</TableCell>
                <TableCell className="table-content">{member.team}</TableCell>
                <TableCell className="table-content">
                  {member.startTime}
                </TableCell>
                <TableCell className="table-content">
                  {member.endTime}
                </TableCell>
                <TableCell className="table-content">
                  <button
                    className="clean-btn"
                    value={member._id}
                    onClick={handleEditMemberClick}
                    style={{
                      backgroundImage: `url(${smallBurger})`,
                      width: `6px`,
                      height: `24px`,
                      backgroundSize: `contain`,
                      backgroundRepeat: `no-repeat`,
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
