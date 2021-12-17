import './css/BlueRoundIcon.css';

const BlueRoundIcon = (props) => {
  const {children} = props;
  // const style = props.style
  return (
    <div className="blue-round-icon" style={props.style}>
      {children}
    </div>
  )
}

export default BlueRoundIcon;