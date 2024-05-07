import { BrowserRouter, Route, Routes } from "react-router-dom";

import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import Layaout from "./components/layout/Layaout.jsx";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import CartContainer from "./components/pages/cart/CartContainer.jsx";
import ErrorPage from "./components/pages/errorPage/ErrorPage.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import Checkout from "./components/pages/checkouts/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layaout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />

            <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<CartContainer />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/Checkout" element={<Checkout />}></Route>
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}
export default App;
