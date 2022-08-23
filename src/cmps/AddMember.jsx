import avatar from '../assets/imgs/demo-members/1.jpg';

export const AddMember = props => {
  return (
    <div className={`popup ${props.isOpen ? 'popup-open' : ''}`}>
      <div className="newMember">
        <form className="flex column align-center justify-center">
          <button
            onClick={props.handleCloseAddMemberClick}
            className="popup-close clean-btn"
          ></button>
          <p className="form-title">Member profile</p>
          <div
            style={{
              backgroundImage: `url(${props.filteredMember[0].avatar})`,
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
                  defaultValue={props.filteredMember[0].name}
                ></input>
              </div>
              <div className="flex column">
                <label className="form-label">Email address*</label>
                <input
                  className="form-input"
                  type="email"
                  defaultValue={props.filteredMember[0].mail}
                />
              </div>
              <div className="flex column">
                <label className="form-label">Phone*</label>
                <input
                  className="form-input"
                  defaultValue={props.filteredMember[0].phone}
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
                  defaultValue={props.filteredMember[0].officalID}
                />
              </div>
              <div className="flex column">
                <label className="form-label">Role*</label>
                <input
                  className="form-input"
                  defaultValue={props.filteredMember[0].role}
                ></input>
              </div>
              <div className="flex column">
                <label className="form-label">Team*</label>
                <input
                  className="form-input"
                  defaultValue={props.filteredMember[0].team}
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
