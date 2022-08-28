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

const fields = ['Task', 'Teams', 'Members']

export const TaskTable = ({ tasks, updateTaskFn, setTaskToUpdate }) => {

    return (
        <TableContainer sx={{ padding: "1rem" }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><Checkbox /></TableCell>
                        <TableCell>Times</TableCell>
                        {
                            fields.map(field =>
                                <TableCell key={field} align="center">{field}</TableCell>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((task) => {
                        const { title, teams, members } = task
                        const fieldsToDisplay = [title,
                            teams.map(team => <Chip key={team._id} label={team.name} sx={{ background: team.color }} />),
                            <AvatarGroup max={4} sx={{ justifyContent: 'left' }} >
                                {members.map(member => <Avatar alt={member.name} src={member.avatar} key={member._id} />)}
                            </AvatarGroup>]
                        const checked = task.status === 'done'
                        return <TableRow
                            key={task._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            className={`task ${task.status}`}
                        >

                            <TableCell component="th" scope="row">
                                <Checkbox onChange={() => {
                                    task.status = task.status === 'done' ? 'todo' : 'done'
                                    updateTaskFn(task)
                                }} checked={checked} />
                            </TableCell>

                            <TableCell component="th" scope="row">
                                {task.time.from + ' - ' + task.time.to}
                            </TableCell>
                            {fieldsToDisplay.map((field, idx) => <TableCell key={fields[idx]} align="center">{field}</TableCell>)}
                            <TableCell align="center">
                                <button onClick={() => setTaskToUpdate(task)} className="btn-task-actions">Edit</button>
                            </TableCell>

                        </TableRow>
                    }
                    )}
                </TableBody>
            </Table>
        </TableContainer >
    )
}
