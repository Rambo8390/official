import "./css/GlassCard.css";

const GlassCard = (props) => {
  const {children} = props;
  const style = props.style;
  return (
    <div className="glass-card" style={style}>
      {children}
    </div>
  )
}

export default GlassCard;