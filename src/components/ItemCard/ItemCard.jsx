import styles from "./ItemCard.module.scss";
// Displays each item for sale in the grid


const ItemCard = ({img, itemName}) => {
  return (
    <div className={styles.itemCard}>
      <div>
        <img src={img} alt="" className={styles.itemImage}/>
      </div>
      <div className={styles.itemDescription}>
        <p>
        {itemName}
        </p>
        <p className={styles.itemDescription_price}>
        Item Price
        </p>
      </div>
    </div>
  )
}

export default ItemCard