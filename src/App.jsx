import { Navbar } from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import itemListContainer from "./components/pages/itemListContainer/itemListContainer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <itemListContainer />
      <Footer />
    </div>
  );
}

export default App;
