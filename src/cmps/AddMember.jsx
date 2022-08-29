import React, { useState } from 'react';
import { memberService } from '../services/memberService';
import search from '../assets/icons/search.svg';

export const AddMember = ({
  isOpen,
  handleCloseAddMemberClick,
  filteredMember,
}) => {
  const {
    _id,
    name,
    avatar,
    phone,
    mail,
    role,
    officialID,
    team,
    startTime,
    endTime,
  } = filteredMember[0];
  const [addNewMember, setAddNewMember] = useState({
    _id: _id,
    name: name,
    avatar: avatar,
    phone: phone,
    mail: mail,
    role: role,
    officialID: officialID,
    team: team,
    startTime: startTime || '08:10:28',
    endTime: endTime || '15:10:50',
  });
  const formInput1 = [
    {
      labelName: 'Full name*',
      inputName: 'name',
      type: 'text',
      defaultValue: name,
    },
    {
      labelName: 'Email address*',
      inputName: 'mail',
      type: 'email',
      defaultValue: mail,
    },
    {
      labelName: 'Phone*',
      inputName: 'phone',
      type: 'number',
      defaultValue: phone,
    },
  ];

  const handleChange = e => {
    setAddNewMember({ ...addNewMember, [e.target.name]: e.target.value });
  };

  const hadleAddSubmit = e => {
    e.preventDefault();
    memberService.add(addNewMember);
    handleCloseAddMemberClick();
  };

  const hadleEditSubmit = e => {
    e.preventDefault();
    memberService.update(addNewMember);
    handleCloseAddMemberClick();
  };

  return (
    <div className={`popup ${isOpen ? 'popup-open' : ''}`}>
      <div className="add-member">
        <form
          className="flex column align-center justify-center"
          onSubmit={name ? hadleEditSubmit : hadleAddSubmit}
        >
          <button
            onClick={handleCloseAddMemberClick}
            className="popup-close clean-btn"
          ></button>
          <p className="form-title">Member profile</p>
          <div
            className="avatar"
            style={{
              backgroundImage: `url(${avatar})`,
            }}
          ></div>
          <div>
            <p className="form-subtitle">Personal Settings</p>
            <div className="flex gap-25">
              {formInput1.map(input => (
                <div className="flex column">
                  <label className="form-label">{input.labelName}</label>
                  <input
                    className="form-input"
                    name={input.inputName}
                    type={input.type}
                    defaultValue={input.defaultValue}
                    onChange={handleChange}
                  ></input>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="form-subtitle">Employee Settings</p>
            <div className="flex gap-25">
              <div className="flex column">
                <label className="form-label">Employee No.*</label>
                <input
                  className="form-input"
                  name="officialID"
                  defaultValue={officialID}
                  onChange={handleChange}
                />
              </div>
              <div className="flex column">
                <label className="form-label">Role*</label>
                <input
                  className="form-input"
                  name="role"
                  defaultValue={role}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex column">
                <label className="form-label">Team*</label>
                <div
                  className="flex align-center"
                  style={{ width: `192px`, height: `55px` }}
                >
                  <div
                    className="flex align-center space-between"
                    style={{ width: `166px` }}
                  >
                    <button className="search-btn clean-btn flex justify-center">
                      <div
                        className="search-icon"
                        style={{
                          backgroundImage: `url(${search})`,
                        }}
                      ></div>
                      <p className="search-text">search</p>
                    </button>
                    <button className="add-btn clean-btn">+ add</button>
                  </div>
                </div>
                {/* <input
                  className="form-input"
                  name="team.title"
                  defaultValue={team}
                  onChange={handleChange}
                ></input> */}
              </div>
            </div>
          </div>
          <button className="save-btn br-10" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
