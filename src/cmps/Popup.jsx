export const Popup = props => {
  let { formWidth, isOpen, onClose, title, saveButtonVisible, onSubmit } =
    props;
  const hadleSubmit = e => {
    e.preventDefault();
    onSubmit();
  };
  const handleClosebuttonClick = () => {
    onClose();
  };
  return (
    <div className={`popup ${isOpen ? 'popup-open' : ''}`}>
      <div
        className="form-container"
        style={{
          width: formWidth,
        }}
      >
        <form
          className="flex column align-center justify-center"
          onSubmit={hadleSubmit}
        >
          <button
            onClick={handleClosebuttonClick}
            className="popup-close clean-btn"
          ></button>
          <p className="form-title">{title}</p>
          {props.children}
          {saveButtonVisible && (
            <button className="save-btn br-10" type="submit">
              Save
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
