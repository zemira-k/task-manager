import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Checkbox } from '@mui/material';

export const DailyTasks = ({ tasks, onUpdateTask }) => {
  return (
    <div className="Daily-tasks">
      <Table size="small" aria-label="simple table">
        <TableBody>
          {tasks &&
            tasks.map(task => {
              const checked = task.status === 'done';
              return (
                <TableRow
                  key={task._id}
                  // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  className={`task ${task.status}`}
                >
                  <TableCell className="table-content">
                    <Checkbox
                      onChange={() => {
                        task.status = task.status === 'done' ? 'todo' : 'done';
                        onUpdateTask(task);
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
                  <TableCell className="table-content">{task.title}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};
