import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import styles from "./ItemPage.module.scss";
import {
  getAllProductsWithMatchingField,
  getProductById,
  updateFavouritedField,
} from "../../services/product-services";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import FavouriteBanner from "../../components/FavouriteBanner/FavouriteBanner";
// The indivdual item page

const ItemPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [productVariants, setProductVariants] = useState(null);

  const navigate = useNavigate();

  const backBtn = `${styles.btn} ${styles.back}`;

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
        getAllProductsWithMatchingField("name", data.name).then((products) =>
          setProductVariants(products)
        );
      })
      .catch((e) => console.log(e.message));
  }, [id]);

  const onBackClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className={styles.itemPage}>
        <div className={styles.product}>
          {productVariants && (
            <img src={product.imageURL} alt="" className={styles.img} />
          )}
          {/* Back Button */}
          <button onClick={onBackClick} className={backBtn}>
            <span>&#8592;</span>
          </button>
          {/* Favorite Button */}
          {product && (
            <FavouriteBanner value={product.favourite} id={product.id} />
          )}
          <div className={styles.product_textSide}>
            {product && (
              <h2 className={styles.product_textSide_name}>{product.name}</h2>
            )}
            <p>Description of Product would be here</p>
            <h3>Variants:</h3>
            {productVariants &&
              productVariants.map((product) => (
                <button
                  key={product.id}
                  onClick={() => navigate(`/${product.id}`)}
                  className={styles.btn + " " + styles[product.colour]}
                >
                  {product.colour}
                </button>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ItemPage;
