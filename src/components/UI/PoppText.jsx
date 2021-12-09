import './css/PoppText.css';

const PoppText = (props) => {
  const {children} = props;
  return (
    <p className="popp-text" style={props.style}>{children}</p>
  )
}

export default PoppText;