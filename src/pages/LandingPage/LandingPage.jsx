import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ItemCard from "../../components/ItemCard/ItemCard";
import styles from "./LandingPage.module.scss";
import { getAllProducts, getAllProductsWithName } from "../../services/product-services";
import ItemsGrid from "../../containers/ItemsGrid/ItemsGrid";

// Home page with title, carousel and items grid


const LandingPage = () => {
  const [products, setProducts] = useState();
  // Set up context and a subscribe event so it will automatically update all product data

  useEffect(() => {
    getAllProducts().then((productsData) => setProducts(productsData));
    // getAllProductsWithName("polo shirt").then();
  }, [])


  return (
    <div className={styles.landingPage}>
      <Header />
      <div className={styles.content}>
        {/* <ItemCard img="https://img.freepik.com/free-psd/psd-blue-hoodie-mockup_1409-3750.jpg?ga=GA1.1.1657426917.1721964726&semt=ais_hybrid" itemName="Hoodie"/> */}
        {products && <ItemsGrid products={products}/>}
      </div>
    </div>
  )
}

export default LandingPage