import { Badge } from "@mui/material";
import { useContext } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "../cartWidget/CartWidget.css";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();
  return (
    <Link to="/cart">
      <Badge badgeContent={total} showZero color="primary">
        <BsFillCartCheckFill size="20px" color="#b03b22" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
