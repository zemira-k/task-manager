import React, { useState } from 'react';
import { memberService } from '../services/memberService';

export const AddMember = ({
  isOpen,
  handleCloseAddMemberClick,
  filteredMember,
}) => {
  const [addNewMember, setAddNewMember] = useState({
    name: filteredMember[0].name,
    avatar:
      filteredMember[0].avatar ||
      'https://randomuser.me/api/portraits/women/35.jpg',
    phone: filteredMember[0].phone,
    mail: filteredMember[0].mail,
    role: filteredMember[0].role,
    officalID: filteredMember[0].officalID,
    team: filteredMember[0].team,
    startTime: filteredMember[0].startTime || '08:10:28',
    endTime: filteredMember[0].endTime || '15:10:50',
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
    let updated = memberService.update(addNewMember);
    console.log(updated);
    handleCloseAddMemberClick();
  };

  return (
    <div className={`popup ${isOpen ? 'popup-open' : ''}`}>
      <div className="add-member">
        <form
          className="flex column align-center justify-center"
          onSubmit={filteredMember[0].name ? hadleEditSubmit : hadleAddSubmit}
        >
          <button
            onClick={handleCloseAddMemberClick}
            className="popup-close clean-btn"
          ></button>
          <p className="form-title">Member profile</p>
          <div
            style={{
              backgroundImage: `url(${filteredMember[0].avatar})`,
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
                  defaultValue={filteredMember[0].name}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex column">
                <label className="form-label">Email address*</label>
                <input
                  className="form-input"
                  name="mail"
                  type="email"
                  defaultValue={filteredMember[0].mail}
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
                  defaultValue={filteredMember[0].phone}
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
                  name="officalID"
                  defaultValue={filteredMember[0].officalID}
                  onChange={handleChange}
                />
              </div>
              <div className="flex column">
                <label className="form-label">Role*</label>
                <input
                  className="form-input"
                  name="role"
                  defaultValue={filteredMember[0].role}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex column">
                <label className="form-label">Team*</label>
                <input
                  className="form-input"
                  name="team"
                  defaultValue={filteredMember[0].team}
                  onChange={handleChange}
                ></input>
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
