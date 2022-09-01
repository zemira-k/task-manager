import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Checkbox,
} from '@mui/material';

import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Popup } from './Popup';
import { utilService } from '../services/utilService';

const ITEM_HEIGHT = 48;

export const AddTask = ({ closeModalFn, task, addTaskFn, updateTaskFn }) => {
  const [register, taskToEdit, resetFields, setFields] = useForm(task);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = () => {
    !!task._id ? updateTaskFn(taskToEdit) : addTaskFn(taskToEdit);
    closeModalFn();
  };

  return (
    <Popup
      formWidth="749px"
      title={task._id ? 'Task edit' : 'Create new task'}
      onClose={closeModalFn}
      saveButtonVisible={true}
      onSubmit={handleSubmit}
    >
      <TextField
        {...register('title', 'Task')}
        fullWidth
        size="small"
        required
        margin="dense"
      />
      {['from', 'to'].map(timeField => {
        return (
          <FormControl
            key={timeField}
            sx={{ margin: '0.5rem 0.5rem 0.5rem 0', minWidth: 120 }}
          >
            <InputLabel htmlFor={`${timeField}-time`}>
              {utilService.capitalize(timeField)}
            </InputLabel>
            <Select
              size="small"
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: ITEM_HEIGHT * 5,
                  },
                },
              }}
              defaultValue={taskToEdit.time[timeField]}
              id={`${timeField}-time`}
              label="From"
            >
              {utilService.getTimeRange().map(time => (
                <MenuItem
                  onClick={() => {
                    setFields(prevFields => {
                      prevFields.time[timeField] = time;
                      return prevFields;
                    });
                    handleClose();
                  }}
                  key={time}
                  value={time}
                >
                  {time}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      })}
      <FormControlLabel
        value="end"
        control={<Checkbox />}
        label="All-day task"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox />}
        label="weekly task"
        labelPlacement="end"
      />
      <div>days</div>
      <div>team</div>
      <div>members</div>
    </Popup>
  );
};
