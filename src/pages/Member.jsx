import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { NewMember } from '../cmps/NewMember';
import { Button } from '@mui/material';

import { contactService } from '../services/contactService';

export const Member = () => {
  let memberList = contactService.query();
  return (
    <div className="Members">
      <Button>Add new member +</Button>
      <Button>filter</Button>
      <Button>sort</Button>
      <h3>Showing {memberList.length} members</h3>
      <React.Fragment>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>full name</TableCell>
              <TableCell>Phone number</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>Start time</TableCell>
              <TableCell>End time</TableCell>
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
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.phone}</TableCell>
                <TableCell>{member.team}</TableCell>
                <TableCell>10:00</TableCell>
                <TableCell>12:00</TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
      {/* <NewMember></NewMember> */}
    </div>
  );
};
