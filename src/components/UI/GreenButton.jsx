import './css/GreenButton.css';

const GreenButton = (props) => {
  const {children} = props;
  return (
    <div className="green-button" >
      {children}
    </div>
  );
}

export default GreenButton;