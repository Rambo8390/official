import "./css/BlueButton.css";

const BlueButton = (props) => {
  return (
    <div className="blue-btn" style={props.style}>
      {props.text}
    </div>
  );
};

export default BlueButton;