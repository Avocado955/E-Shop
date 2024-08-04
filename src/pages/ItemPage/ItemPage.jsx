import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import styles from "./ItemPage.module.scss";
import { getAllProductsWithName, getProductById } from "../../services/product-services";
import { useParams } from "react-router-dom";
// The indivdual item page

const ItemPage = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [productVariants, setProductVariants] = useState(null);

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
      getAllProductsWithName(data.name).then((products) => setProductVariants(products))
    }).catch((e) => console.log(e.message));
  }, [id])

  return (
    <div>
      <Header />
      <div>
        {product && <p>{product.name}</p>}
        Make the single product section
        {productVariants && productVariants.map((product) => <p>{product.colour}</p>)}
      </div>
    </div>
  )
}
export default ItemPage