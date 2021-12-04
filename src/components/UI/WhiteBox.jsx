import './css/WhiteBox.css';

const WhiteBox = (props) => {
  const {children} = props;
  return (
    <div className="white-box" style={props.style}>
      {children}
    </div>
  )
}

export default WhiteBox;