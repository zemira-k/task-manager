import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Checkbox } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import commentsIcon from '../assets/icons/commentsPurple.svg';
import smallBurger from '../assets/icons/smallBurger.svg';

const tableHeaders = [
  { name: 'Hours', width: '8.75rem' },
  { name: 'Task', width: '22.5rem' },
  { name: 'Teams', width: '12.25rem' },
  { name: 'Members', width: '13rem' },
  { name: 'Comments', width: '7.5rem' },
  { name: '', width: '3.75rem' },
];

export const TaskTable = ({ tasks, updateTaskFn, setTaskToUpdate }) => {
  const [checkedAll, setCheckedAll] = React.useState(false);
  const [count, setCount] = React.useState(5);

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
    <Table size="small" className="member-table">
      <TableHead>
        <TableRow>
          <TableCell
            className="table-header"
            sx={{
              width: '3.75rem',
              color: '#8724bd',
              '&.Mui-checked': {
                color: '#8724bd',
              },
            }}
          >
            <Checkbox
              onChange={handleChangeCheckedAll}
              // sx={{
              //   color: '#7A69EE',
              //   '&.Mui-checked': {
              //     color: '#7A69EE',
              //   },
              // }}
              checked={checkedAll}
            />
          </TableCell>
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
        {tasks.slice(0, count).map(task => {
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
              <TableCell
                align="center"
                component="th"
                scope="row"
                sx={{ borderBottom: 0 }}
              >
                {task.time}
                {/* {task.time.from + ' - ' + task.time.to} */}
              </TableCell>
              <TableCell sx={{ borderBottom: 0 }}>{task.title}</TableCell>
              {task.teams.map(team => (
                <TableCell
                  key={team._id}
                  align="center"
                  sx={{ borderBottom: 0 }}
                >
                  <div className="flex content-center align-center">
                    <div
                      className="dot"
                      style={{
                        backgroundColor: team.color,
                      }}
                    />
                    <p style={{ fontSize: '1rem', marginLeft: '9px' }}>
                      {team.title}
                    </p>
                  </div>
                </TableCell>
              ))}
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
  );
};
