import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { Skeleton } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import "../itemListContainer/ItemListContainer.css";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);
  console.log(items);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }
    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(newArray);
    });
  }, [name]);

  if (items.length === 0) {
    return (
      <div className="contenedor-Skeleton">
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={200}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={40}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={100}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={200}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={40}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={100}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={200}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={40}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={100}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={200}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={40}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={100}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={200}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={40}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={100}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={200}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={40}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={100}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={200}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={40}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={100}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={200}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={40}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={100}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {items.length > 0 ? (
        <ItemList items={items} error={error} />
      ) : (
        <BounceLoader color="steelblue" size={50} />
      )}
    </>
  );
};

export default ItemListContainer;
