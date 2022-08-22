import React from 'react';
import avatar from '../assets/imgs/demo-members/1.jpg';

export const NewMember = () => {
  return (
    <div className="popup popup-open">
      <div className="newMember">
        <form className="flex column align-center justify-center">
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
                <input className="form-input" required />
              </div>
              <div className="flex column">
                <label className="form-label">Email address*</label>
                <input className="form-input" type="email" required />
              </div>
              <div className="flex column">
                <label className="form-label">Phone*</label>
                <input className="form-input" required />
              </div>
            </div>
          </div>
          <div>
            <p className="form-subtitle">Employee Settings</p>
            <div className="flex gap-25">
              <div className="flex column">
                <label className="form-label">Employee No.*</label>
                <input className="form-input" required />
              </div>
              <div className="flex column">
                <label className="form-label">Role*</label>
                <input className="form-input" required />
              </div>
              <div className="flex column">
                <label className="form-label">Team*</label>
                <input className="form-input" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
