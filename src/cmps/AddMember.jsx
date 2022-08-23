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
            style={{
              backgroundImage: `url(${avatar})`,
              width: `96px`,
              height: `96px`,
              backgroundSize: `contain`,
              borderRadius: `50%`,
            }}
          ></div>
          <div>
            <p className="form-subtitle">Personal Settings</p>
            <div className="flex gap-25">
              <div className="flex column">
                <label className="form-label">Full name*</label>
                <input
                  className="form-input"
                  name="name"
                  defaultValue={name}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex column">
                <label className="form-label">Email address*</label>
                <input
                  className="form-input"
                  name="mail"
                  type="email"
                  defaultValue={mail}
                  onChange={handleChange}
                />
              </div>
              <div className="flex column">
                <label className="form-label">Phone*</label>
                <input
                  className="form-input"
                  name="phone"
                  type="number"
                  minLength={9}
                  defaultValue={phone}
                  onChange={handleChange}
                  required
                />
              </div>
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
                        style={{
                          backgroundImage: `url(${search})`,
                          width: `12px`,
                          height: `12px`,
                          backgroundSize: `contain`,
                          backgroundRepeat: `no-repeat`,
                          alignSelf: `center`,
                        }}
                      ></div>
                      <p
                        style={{
                          alignSelf: `center`,
                          color: `#7A69EE`,
                          marginLeft: `5px`,
                        }}
                      >
                        search
                      </p>
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
