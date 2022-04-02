import Map from "./Map";

function App() {
  return (
    <div className="container">
      <div className="item item1">LIST OF IPs</div>
      <Map gridPosition="item item2" />
      <div className="item item3">INFO</div>
      <div className="item item4">SEARCH BAR</div>
      <Map gridPosition="item item5" />
      <div className="item item6">6</div>
    </div>
  );
}

export default App;
