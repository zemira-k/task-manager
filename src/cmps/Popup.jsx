export const Popup = props => {
  let { formWidth, onClose, title, saveButtonVisible, onSubmit } = props;
  const hadleSubmit = e => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="popup popup-open">
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
          <button onClick={onClose} className="popup-close clean-btn"></button>
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
