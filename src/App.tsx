import Sorting_visualizer from "./Sorting_algo/Sorting_visualizer";
import logo from "/logo.png";
function App() {
  return (
    <>
      <div className="title-bar" style={{ display: "flex" }}>
        <img
          src={logo}
          alt="logo"
          className="app-logo"
          style={{ height: "48px" }}
        />
        <div className="title">Sort Symphony</div>
      </div>
      <Sorting_visualizer />
    </>
  );
}

export default App;
