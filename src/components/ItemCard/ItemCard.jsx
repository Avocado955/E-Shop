import styles from "./ItemCard.module.scss";
// Displays each item for sale in the grid


const ItemCard = ({product}) => {
  return (
    <div className={styles.itemCard}>
      <div>
        <img src={product.imageURL} alt="" className={styles.itemImage}/>
      </div>
      <div className={styles.itemDescription}>
        <p>
        {product.name}
        </p>
        <p className={styles.itemDescription_price}>
        ${product.price} AUD
        </p>
      </div>
    </div>
  )
}

export default ItemCard