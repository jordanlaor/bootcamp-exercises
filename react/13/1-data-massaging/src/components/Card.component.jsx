function Card(props) {
  return (
    <div>
      <h2>{props.item.name}</h2>
      <div>Birthday: {props.item.birthday}</div>
      <div>
        favorite foods:
        <div>
          meats:{" "}
          {props.item.favoriteFoods.meats.map((meat, id) => (
            <span key={id}>-{meat}-</span>
          ))}
        </div>
        <div>
          fish:{" "}
          {props.item.favoriteFoods.fish.map((fish, id) => (
            <span key={id}>-{fish}-</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
