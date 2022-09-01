import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import smallBurger from '../assets/icons/smallBurger.svg';

export const MemberTable = ({ members, setMemberToUpdate }) => {
  const tableHeaders = [
    { name: '', width: '3.75rem' },
    { name: 'Full name', width: '21.875rem' },
    { name: 'Phone number', width: '12.5rem' },
    { name: 'Team', width: '5.875rem' },
    { name: 'Start time', width: '9.8125rem' },
    { name: 'End time', width: '10.5rem' },
    { name: '', width: '3.75rem' },
  ];
  return (
    <Table size="small" className="member-table mar-t-63">
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
        {members.map(member => {
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
              <TableCell className="table-content table-content-type-team">
                <div
                  className="table-content-type-team"
                  style={{
                    backgroundColor: `${member.team.color}`,
                  }}
                >
                  {member.team.title}
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
