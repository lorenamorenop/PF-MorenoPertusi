import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../productCard/ProductCard.css";

const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <Card
      className="card-padre"
      sx={{ width: 345, display: "flex", flexDirection: "column" }}
    >
      <CardMedia
        className="card-fondo"
        sx={{ height: 140 }}
        image={img}
        title="vino"
      />

      <CardContent className="card-content">
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {price} .-
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small">Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
