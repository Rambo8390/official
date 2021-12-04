import "./css/BlueButton.css";

const BlueButton = (props) => {
  return (
    <div className="blue-btn">
      {props.text}
    </div>
  );
};

export default BlueButton;