import { Popup } from '../cmps/Popup';
import avatar from '../assets/imgs/demo-members/1.jpg';

export const Comments = props => {
  let { isOpen, onClose, title } = props;
  return (
    <div className="comments">
      <div className="flex space-between align-center">
        <div className="flex align-center">
          <div
            className="comments-avatar"
            style={{
              backgroundImage: `url(${avatar})`,
            }}
          />
          <p>Emptying rubbish and bins</p>
        </div>
        <p>44m ago</p>
      </div>
      {isOpen && (
        <Popup
          formWidth="749px"
          isOpen={isOpen}
          onClose={onClose}
          title={title}
          saveButtonVisible={false}
        ></Popup>
      )}
    </div>
  );
};
