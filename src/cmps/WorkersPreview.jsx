import { Workers } from './Workers';
import { Popup } from './Popup';

export const WorkersPreview = props => {
  let { isOpen, onClose, title } = props;
  return (
    <div>
      <div>
        <Workers />
      </div>
      {isOpen && (
        <Popup
          formWidth="529px"
          isOpen={isOpen}
          onClose={onClose}
          title={title}
          saveButtonVisible={false}
        >
          <Workers />
        </Popup>
      )}
    </div>
  );
};
