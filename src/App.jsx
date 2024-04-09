import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import Layaout from "./components/layout/Layaout.jsx";

function App() {
  return (
    <>
      <Layaout>
        <div className="App">
          <ItemListContainer />
        </div>
      </Layaout>
    </>
  );
}

export default App;
