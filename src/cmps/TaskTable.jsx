import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';

const fields = ['Task', 'Teams', 'Members']

export const TaskTable = ({ tasks, onToggleTaskStatus }) => {

    return (
        <TableContainer sx={{ padding: "1rem" }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><Checkbox /></TableCell>
                        <TableCell>Times</TableCell>
                        {
                            fields.map(field =>
                                <TableCell key={field} align="right">{field}</TableCell>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((task) => {
                        const { title, teams, members } = task
                        const fieldsToDisplay = [title, JSON.stringify(teams), JSON.stringify(members)]
                        const checked = task.status === 'done'
                        return <TableRow
                            key={task._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell component="th" scope="row">
                                <Checkbox onChange={() => {
                                    task.status = task.status === 'done' ? 'todo' : 'done'
                                    onToggleTaskStatus(task)
                                }} checked={checked} />
                            </TableCell>

                            <TableCell component="th" scope="row">
                                {task.time}
                            </TableCell>
                            {fieldsToDisplay.map(field => <TableCell key={field} align="right">{field}</TableCell>)}
                            <TableCell align="right">
                                <button className="btn-task-actions">Edit</button>
                            </TableCell>

                        </TableRow>
                    }
                    )}
                </TableBody>
            </Table>
        </TableContainer >
    )
}
