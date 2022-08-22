import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { NewMember } from '../cmps/NewMember';
import sortIcon from '../assets/icons/sort.svg';
import filterIcon from '../assets/icons/filter.svg';

import { contactService } from '../services/contactService';

export const Member = () => {
  let memberList = contactService.query();
  return (
    <section className="Members">
      <div className="left flex space-between align-center gap-1 mar-t-56">
        <div className="left flex align-center gap-1">
          <button className="members-add-button fs20 lh-35 br-10">
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
        <span>Showing {memberList.length} members</span>
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
                <TableCell>
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
                <TableCell className="table-content">10:00</TableCell>
                <TableCell className="table-content">12:00</TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
      <NewMember></NewMember>
    </section>
  );
};
