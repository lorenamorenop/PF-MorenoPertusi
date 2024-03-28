import { Navbar } from "./components/layout/navbar/Navbar.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import Footer from "./components/layout/footer/Footer.jsx";

function App() {
  const greeting = "Bienvenidos a Wein, tienda de vinos";
  return (
    <>
      <Navbar />
      <div className="App">
        <ItemListContainer greeting={greeting} />
      </div>
      <Footer />
    </>
  );
}

export default App;
