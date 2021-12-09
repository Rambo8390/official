import './css/BlueBox.css';

const BlueBox = (props) => {
  const {children} = props;
  return (
    <div className="blue-box" style={props.style}>
      {children}
    </div>
  )
}

export default BlueBox;