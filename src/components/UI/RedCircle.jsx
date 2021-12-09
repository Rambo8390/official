import './css/RedCircle.css';

const RedCircle = (props) => {
  return (
    <div className="red-circle" style={props.style}>
      <p><span id="l1">#</span><span id="l2">03</span></p>
      <p id="l3">POOL</p>
    </div>
  )
}

export default RedCircle;