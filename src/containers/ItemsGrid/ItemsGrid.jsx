// Makes the grid of items and makes each itemCard

import ItemCard from "../../components/ItemCard/ItemCard"

const ItemsGrid = ({products}) => {
  return (
    <div>
      {products?.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ItemsGrid