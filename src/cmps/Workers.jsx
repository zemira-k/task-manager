import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { memberService } from '../services/memberService';

export const Workers = () => {
  let members = memberService.query();
  return (
    <div className="workers">
      <div>workers</div>

      <Table size="small" className="member-table mar-t-17">
        <TableHead>
          <TableRow>
            <TableCell
              className="table-header"
              sx={{ width: `20px` }}
            ></TableCell>
            <TableCell className="table-header" sx={{ width: `100px` }}>
              Name
            </TableCell>
            <TableCell className="table-header" sx={{ width: `60px` }}>
              Start time
            </TableCell>
            <TableCell className="table-header" sx={{ width: `60px` }}>
              End time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map(member => (
            <TableRow key={member._id}>
              <TableCell className="table-content">
                <div
                  style={{
                    backgroundImage: `url(${member.avatar})`,
                    width: `24px`,
                    height: `24px`,
                    backgroundSize: `contain`,
                    borderRadius: `50%`,
                    marginRight: `10.5px`,
                  }}
                />
              </TableCell>
              <TableCell className="table-content">{member.name}</TableCell>
              <TableCell className="table-content">
                {member.startTime}
              </TableCell>
              <TableCell className="table-content">{member.endTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
