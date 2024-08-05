import { Link, useNavigate } from "react-router-dom";
import FavouriteBanner from "../FavouriteBanner/FavouriteBanner";
import styles from "./ItemCard.module.scss";
// Displays each item for sale in the grid

const ItemCard = ({product}) => {
  const navigate = useNavigate();

  return (
    <Link to={`/${product.id}`} className={styles.link}>
    <div className={styles.itemCard}>
      <div>
        <img src={product.imageURL} alt="" className={styles.itemImage}/>
      </div>
      {product.favourite && <FavouriteBanner />}
      <div className={styles.itemDescription}>
        <p>
        {product.name}
        </p>
        <p className={styles.itemDescription_price}>
        ${product.price} AUD
        </p>
      </div>
    </div>
    </Link>
  )
}

export default ItemCard