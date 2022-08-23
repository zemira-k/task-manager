import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import smallBurger from '../assets/icons/smallBurger.svg';

export const MemberTable = ({ members, handleEditMemberClick }) => {
  return (
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
                }}
              />
            </TableCell>
            <TableCell className="table-content">{member.name}</TableCell>
            <TableCell className="table-content">{member.phone}</TableCell>
            <TableCell
              className="table-content"
              style={{
                backgroundColor: `${member.team.color}`,
                borderRadius: `50px`,
                width: `94px`,
                height: `33px`,
                color: `#ffffff`,
                letterSpacing: `0.02em`,
              }}
            >
              {member.team.title}
            </TableCell>
            <TableCell className="table-content">{member.startTime}</TableCell>
            <TableCell className="table-content">{member.endTime}</TableCell>
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
  );
};
