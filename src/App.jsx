import { BrowserRouter, Route, Routes } from "react-router-dom";

import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import Layaout from "./components/layout/Layaout.jsx";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import CartContainer from "./components/pages/cart/CartContainer.jsx";
import ErrorPage from "./components/pages/errorPage/ErrorPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layaout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />

          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/Cart" element={<CartContainer />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
