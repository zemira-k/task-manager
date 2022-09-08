import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import smallBurger from '../assets/icons/smallBurger.svg';

const tableHeaders = [
  { name: '', width: '3.75rem' },
  { name: 'Full name', width: '21.875rem' },
  { name: 'Phone number', width: '12.5rem' },
  { name: 'Team', width: '5.875rem' },
  { name: 'Start time', width: '9.8125rem' },
  { name: 'End time', width: '10.5rem' },
  { name: '', width: '3.75rem' },
];

export const MemberTable = ({ members, setMemberToUpdate }) => {
  const [count, setCount] = React.useState(5);
  return (
    <Table size="small" className="member-table">
      <TableHead>
        <TableRow>
          {tableHeaders.map((header, i) => (
            <TableCell
              key={i}
              className="table-header"
              sx={{ width: header.width }}
            >
              {header.name}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {members.slice(0, count).map(member => {
          return (
            <TableRow key={member._id}>
              <TableCell className="table-content">
                <div
                  className="table-content-type-avatar"
                  style={{
                    backgroundImage: `url(${member.avatar})`,
                  }}
                />
              </TableCell>
              <TableCell className="table-content">{member.name}</TableCell>
              <TableCell className="table-content">{member.phone}</TableCell>
              <TableCell className="table-content">
                <div className="flex content-center align-center">
                  <div
                    className="dot"
                    style={{
                      backgroundColor: member.team.color,
                    }}
                  />
                  <p style={{ fontSize: '1rem', marginLeft: '9px' }}>
                    {member.team.title}
                  </p>
                </div>
              </TableCell>
              <TableCell className="table-content">
                {member.startTime}
              </TableCell>
              <TableCell className="table-content">{member.endTime}</TableCell>
              <TableCell
                className="table-content"
                style={{
                  textAlign: `-webkit-left`,
                }}
              >
                <button
                  className="clean-btn table-content-type-burger"
                  onClick={() => setMemberToUpdate(member)}
                  style={{
                    backgroundImage: `url(${smallBurger})`,
                  }}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
