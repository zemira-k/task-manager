import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { memberService } from '../services/memberService';

export const Workers = () => {
  const tableHeaders = [
    { name: '', width: '1.25rem' },
    { name: 'Name', width: '6.25rem' },
    { name: 'Start time', width: '3.75rem' },
    { name: 'End time', width: '3.75rem' },
  ];

  let members = memberService.query();
  return (
    <div className="workers">
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
          {members &&
            members.map(member => (
              <TableRow key={member._id}>
                <TableCell className="table-content">
                  <div
                    className="member-avatar"
                    style={{
                      backgroundImage: `url(${member.avatar})`,
                    }}
                  />
                </TableCell>
                <TableCell className="table-content">{member.name}</TableCell>
                <TableCell className="table-content">
                  {member.startTime}
                </TableCell>
                <TableCell className="table-content">
                  {member.endTime}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};
