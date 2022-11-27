import { FormControlLabel, Checkbox, Select, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Popup } from './Popup';
import { teamService } from '../services/teamService';
import { memberService } from '../services/memberService';

const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const allTeams = teamService.query();

export const AddTask = ({ closeModalFn, task, addTaskFn, updateTaskFn }) => {
  const [teamMembers, setTeamMembers] = useState(task.members);
  const [visible, setVisible] = useState(false);
  const [membersName, setMembersName] = useState(
    memberService.query({ team: task.team.title })
  );
  const { _id, title, time, team, members, comments, createdAt, status } = task;

  const [addNewTask, setAddNewTask] = useState({
    _id: _id,
    title: title,
    time: time,
    team: { _id: team._id, title: team.title, color: team.color },
    members: members,
    comments: comments,
    createdAt: createdAt,
    status: status,
  });

  const handleChange = e => {
    console.log(e.target.value);
    setAddNewTask({ ...addNewTask, [e.target.name]: e.target.value });
  };

  const hadleAddSubmit = () => {
    addTaskFn(addNewTask);
    closeModalFn();
  };

  const hadleEditSubmit = () => {
    updateTaskFn(addNewTask);
    closeModalFn();
  };
  // const handleSubmit = () => {
  //   !!task._id ? updateTaskFn(taskToEdit) : addTaskFn(taskToEdit);
  //   closeModalFn();
  // };

  const handleTeamChange = e => {
    const findTeam = teamService.query({ title: e.target.value });
    setAddNewTask({
      ...addNewTask,
      team: {
        _id: findTeam[0]._id,
        title: findTeam[0].title,
        color: findTeam[0].color,
      },
    });
    setMembersName(memberService.query({ team: e.target.value }));
  };

  const handleAddTeamMember = () => {
    setVisible(true);
  };

  const handleMemberSelect = e => {
    const mem = membersName.filter(member => member._id === e.target.value);
    setTeamMembers([
      ...teamMembers,
      {
        avatar: mem[0].avatar,
        fullName: mem[0].name,
        roll: mem[0].role,
        _id: mem[0]._id,
      },
    ]);
    setVisible(false);
  };

  return (
    <Popup
      formWidth="749px"
      title={task._id ? 'Task edit' : 'Create new task'}
      onClose={closeModalFn}
      saveButtonVisible={true}
      onSubmit={title ? hadleEditSubmit : hadleAddSubmit}
    >
      <div className="form-container">
        <div className="flex column mb-06">
          <label className="form-label">Task*</label>
          <input
            className="form-input task"
            name="title"
            defaultValue={task.title}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex space-between mb-06">
          <div className="flex column">
            <label className="form-label">Hours*</label>
            <Select
              className="form-input"
              name="time"
              defaultValue={task.time}
              sx={{ borderRadius: '9px' }}
              onChange={handleChange}
            >
              <MenuItem value="01:00 - 01:30">01:00 - 01:30</MenuItem>
              <MenuItem value="01:30 - 02:00">01:30 - 02:00</MenuItem>
              <MenuItem value="02:00 - 02:30">02:00 - 02:30</MenuItem>
              <MenuItem value="02:30 - 03:00">02:30 - 03:00</MenuItem>
            </Select>
          </div>
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
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="Monthly task"
            labelPlacement="end"
          />
        </div>
        <div className="flex space-between mb-06">
          <div className="flex column">
            <label className="form-label">Days*</label>
            <div className="form-input days flex gap-2 space-between">
              {week.map((day, i) => (
                <p key={i}>{day}</p>
              ))}
            </div>
          </div>
          <div className="flex column mb-06">
            <label className="form-label">Week*</label>
            <Select
              className="form-input"
              defaultValue={``}
              sx={{ borderRadius: '9px' }}
            >
              <MenuItem value="" selected>
                {' '}
              </MenuItem>
              <MenuItem value="week1">week1</MenuItem>
              <MenuItem value="week2">week2</MenuItem>
              <MenuItem value="week3">week3</MenuItem>
              <MenuItem value="week4">week4</MenuItem>
            </Select>
          </div>
        </div>
        <div className="flex align-center left-self  gap-1">
          <div className="flex column">
            <label className="form-label">Team*</label>
            <Select
              className="form-input"
              name="team"
              defaultValue={task.team.title}
              onChange={handleTeamChange}
              sx={{ borderRadius: '9px' }}
            >
              {allTeams.map((team, i) => (
                <MenuItem key={i} value={team.title}>
                  {team.title}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="flex align-center">
            {teamMembers && (
              <div className="flex column">
                <label className="form-label members-label">members*</label>
                <div className="form-input members flex space-between task">
                  <AvatarGroup max={4} sx={{ justifyContent: 'left' }}>
                    {teamMembers.map(member => (
                      <Avatar
                        alt={member.name}
                        src={member.avatar}
                        key={member._id}
                      />
                    ))}
                  </AvatarGroup>
                </div>
              </div>
            )}
            {!visible && (
              <button
                className="addMember clean-btn"
                onClick={handleAddTeamMember}
              />
            )}
          </div>
          {visible && (
            <div className="flex column" style={{ height: '26px' }}>
              <Select
                name="member"
                defaultValue={''}
                onChange={handleMemberSelect}
                sx={{
                  height: '26px',
                  width: '192px',
                  borderRadius: '9px',
                }}
              >
                {membersName.map(member => (
                  <MenuItem value={member._id} key={member._id}>
                    {member.name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          )}
        </div>
      </div>
    </Popup>
  );
};
