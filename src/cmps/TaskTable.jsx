import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import commentsIcon from '../assets/icons/commentsPurple.svg';
import smallBurger from '../assets/icons/smallBurger.svg';

const fields = ['Task', 'Teams', 'Members', 'Comments', ''];

export const TaskTable = ({ tasks, updateTaskFn, setTaskToUpdate }) => {
  const [checkedAll, setCheckedAll] = React.useState(false);

  function handleChangeCheckedAll() {
    if (checkedAll === true) {
      setCheckedAll(false);
      tasks.map(task => {
        task.status = 'todo';
        updateTaskFn(task);
        return task;
      });
    } else {
      setCheckedAll(true);
      tasks.map(task => {
        task.status = 'done';
        updateTaskFn(task);
        return task;
      });
    }
  }

  return (
    <TableContainer sx={{ padding: '1rem' }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                onChange={handleChangeCheckedAll}
                sx={{
                  color: '#7A69EE',
                  '&.Mui-checked': {
                    color: '#7A69EE',
                  },
                }}
                checked={checkedAll}
              />
            </TableCell>
            <TableCell>Hours</TableCell>
            {fields.map(field => (
              <TableCell key={field} align="center">
                {field}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map(task => {
            const checked = task.status === 'done';
            return (
              <TableRow
                key={task._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className={`task ${task.status}`}
              >
                <TableCell component="th" scope="row" sx={{ borderBottom: 0 }}>
                  <Checkbox
                    onChange={() => {
                      task.status = task.status === 'done' ? 'todo' : 'done';
                      updateTaskFn(task);
                      checkedAll && setCheckedAll(false);
                    }}
                    sx={{
                      color: '#7A69EE',
                      '&.Mui-checked': {
                        color: '#7A69EE',
                      },
                    }}
                    checked={checked}
                  />
                </TableCell>
                <TableCell component="th" scope="row" sx={{ borderBottom: 0 }}>
                  {task.time.from + ' - ' + task.time.to}
                </TableCell>
                <TableCell align="center" sx={{ borderBottom: 0 }}>
                  {task.title}
                </TableCell>
                <TableCell align="center" sx={{ borderBottom: 0 }}>
                  {task.teams.map(team => (
                    <Chip
                      key={team._id}
                      label={team.title}
                      sx={{ background: team.color }}
                    />
                  ))}
                </TableCell>
                <TableCell align="center" sx={{ borderBottom: 0 }}>
                  <AvatarGroup max={4} sx={{ justifyContent: 'left' }}>
                    {task.members.map(member => (
                      <Avatar
                        alt={member.name}
                        src={member.avatar}
                        key={member._id}
                      />
                    ))}
                  </AvatarGroup>
                </TableCell>
                <TableCell align="center" sx={{ borderBottom: 0 }}>
                  <div className="flex content-center">
                    <div
                      className="comment-icon"
                      style={{
                        backgroundImage: `url(${commentsIcon})`,
                      }}
                    />
                    <p style={{ color: '#5B4CCC', fontSize: '1rem' }}>
                      {' '}
                      {task.comments}
                    </p>
                  </div>
                </TableCell>
                <TableCell align="center" sx={{ borderBottom: 0 }}>
                  <button
                    onClick={() => setTaskToUpdate(task)}
                    className="btn-task-actions clean-btn table-content-type-burger"
                    style={{
                      backgroundImage: `url(${smallBurger})`,
                    }}
                  ></button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
