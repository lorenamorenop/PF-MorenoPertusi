import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={0} color="primary" showZero>
        <AddShoppingCartIcon
          color="action"
          sx={{ marginTop: "10px", fontSize: "20px" }}
        />
      </Badge>
    </div>
  );
};

export default CartWidget;
