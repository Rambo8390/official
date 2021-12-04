import './css/RedBox.css';

const RedBox = (props) => {
  const {children} = props;
  return (
    <div className="red-box" style={props.style}>
      {children}
    </div>
  )
}

export default RedBox;