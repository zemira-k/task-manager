import { FormControl, InputLabel, Menu, MenuItem, MenuList, Select, TextField } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg'
import { useForm } from '../hooks/useForm';
import { utilService } from '../services/utilService';

const ITEM_HEIGHT = 48

export const AddTask = ({
  closeModalFn,
  task,
  addTaskFn,
  updateTaskFn,

}) => {

  const [register, taskToEdit, resetFields, setFields] = useForm(task);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const modalRef = useRef()

  useEffect(() => {
    // const handleClickOutsideMenu = ({ target }) => {
    //   if (open) return
    //   console.log('object');
    //   if (modalRef.current && !modalRef.current.contains(target)) {
    //     closeModalFn()
    //   }
    // }

    // document.addEventListener('mousedown', ev => handleClickOutsideMenu(ev))
    // return () => {
    //   document.removeEventListener('mousedown', ev =>
    //     handleClickOutsideMenu(ev)
    //   )
    // }
  }, [modalRef])





  const handleSubmit = ev => {
    ev.preventDefault();
    !!task._id ? updateTaskFn(taskToEdit) : addTaskFn(taskToEdit)
    closeModalFn()
  }



  return (
    <div className='add-task-modal'>
      <main className="modal-content flex column">
        <header className="modal-header flex align-center">
          <button className="btn-close-modal clean-btn flex" onClick={closeModalFn}>
            <CloseIcon width={16} height={16} />
          </button>
          <h4 className="modal-title">{task._id ? 'Task edit' : 'Create new task'}</h4>
        </header>

        <form
          onSubmit={ev => {
            handleSubmit(ev)
          }}
          className="save-task-form"
          ref={modalRef}>

          <TextField
            {...register('title', 'Task')}
            fullWidth
            size="small"
            required
            margin="dense"
          />
          {['from', 'to'].map((timeField) => {

            return <FormControl key={timeField} sx={{ margin: "0.5rem 0.5rem 0.5rem 0", minWidth: 120 }}>
              <InputLabel htmlFor={`${timeField}-time`}>{utilService.capitalize(timeField)}</InputLabel>
              <Select
                size="small"
                MenuProps={
                  {
                    PaperProps: {
                      style: {
                        maxHeight: ITEM_HEIGHT * 5,
                      }
                    }
                  }
                }
                defaultValue={taskToEdit.time[timeField]} id={`${timeField}-time`} label="From">

                {utilService.getTimeRange().map(time =>
                  <MenuItem
                    onClick={() => {
                      setFields((prevFields) => {
                        prevFields.time[timeField] = time
                        return prevFields
                      })
                      handleClose()
                    }} key={time} value={time}>
                    {time}
                  </MenuItem>)}
              </Select>

            </FormControl>
          })}
          {/* <TextField
          margin="dense"
            size="small"
            sx={{ width: '6rem' }}
            value={taskToEdit.time.from}
            required
            select
            onMouseDown={handleClick}
            label="From"
          >
            <Menu

              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                },
              }}
              PopoverClasses={{
                root: "from-time-popover"
              }}
            >
              </Menu>


            {utilService.getTimeRange().map(time =>
              <MenuItem
              onClick={() => {
                setFields((prevFields) => {
                  prevFields.time.from = time
                  return prevFields
                })
                handleClose()
              }} key={time} value={time}>
                {time}
              </MenuItem>)}


          </TextField> */}
        </form>
      </main>
    </div>
  );
};
