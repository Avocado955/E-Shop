// Makes the grid of items and makes each itemCard
import styles from "./ItemsGrid.module.scss";
import ItemCard from "../../components/ItemCard/ItemCard"

const ItemsGrid = ({products}) => {
  return (
    <div className={styles.itemsGrid}>
      {products?.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ItemsGrid