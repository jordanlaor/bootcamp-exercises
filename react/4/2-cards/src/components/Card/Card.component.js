import "./card.css";
const Card = (props) => {
  return (
    <div className="card">
      <div className="cardImg" style={{ backgroundImage: `url('${props.image}')` }}></div>
      <h2 className="cardTitle">{props.title}</h2>
      <div className="cardDesc">{props.description}</div>
      <div className="cardLinksWrapper">{props.children}</div>
    </div>
  );
};
export default Card;
