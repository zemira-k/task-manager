import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { commentService } from '../services/commentService';

export const Comments = props => {
  let comments = commentService.query();
  return (
    <div className="comments">
      <Table size="small" aria-label="simple table">
        <TableBody>
          {comments &&
            comments.map(comment => {
              return (
                <TableRow
                  key={comment._id}
                  className="flex space-between align-center"
                >
                  <TableCell className="table-content">
                    <div
                      className="comments-avatar"
                      style={{
                        backgroundImage: `url(${
                          comment.outComment[comment.outComment.length - 1]
                            .avatar
                        })`,
                      }}
                    />
                  </TableCell>
                  <TableCell className="table-content comment-title">
                    {comment.task}
                  </TableCell>
                  <TableCell
                    className="table-content"
                    sx={{ color: '#797779' }}
                  >
                    44m ago
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};
