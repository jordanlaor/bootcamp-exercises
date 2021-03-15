import Card from "./components/Card/Card.component";
function App() {
  return (
    <div>
      <Card image="https://source.unsplash.com/random/800x600" title="title1" description="loram lorem some random text">
        <a href="#">link 1</a>
        <a href="#">link 2</a>
      </Card>
      <Card image="https://source.unsplash.com/random/1000x700" title="title2" description="why dont i have real lorem">
        <a href="#">link 3</a>
        <a href="#">link 4</a>
      </Card>
      <Card image="https://source.unsplash.com/random/900x800" title="title3" description="i have no idea what random text should i write">
        <a href="#">link 5</a>
        <a href="#">link 6</a>
        <a href="#">link 7</a>
      </Card>
    </div>
  );
}

export default App;

{
  /* <div className="card">
      <div className="cardImg" style={{backgroundImage=`url('${props.image}')`}}></div>
      <h2 className="cardTitle">{props.title}</h2>
      <div className="cardDesc">{props.description}</div>
      <div className="cardLinksWrapper">{props.children}</div>
    </div> */
}
