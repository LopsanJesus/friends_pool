import "./style.scss";

interface IProps {
  message: string;
  onClose: () => void;
}

const Overlay = ({ message, onClose }: IProps) => {
  return (
    <div className="Overlay" onClick={() => onClose()}>
      <div className="Overlay__content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={() => onClose()}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Overlay;
