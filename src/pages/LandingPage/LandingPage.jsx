import { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import styles from "./LandingPage.module.scss";
import { getAllProducts, subscribeToCollection } from "../../services/product-services";
import ItemsGrid from "../../containers/ItemsGrid/ItemsGrid";
import {ProductsContext} from "../../context/ProductsContextProvider";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";

// Home page with title, carousel and items grid


const LandingPage = () => {
  const {products, setProducts} = useContext(ProductsContext);
  // Set up context and a subscribe event so it will automatically update all product data

  useEffect(() => {
    // Pass the function of setProducts to be called inside the subscribe function
    const unsubscribe = subscribeToCollection(setProducts);

    return () => {
      //clean up
      unsubscribe();
    }
  }, [])


  return (
    <div className={styles.landingPage}>
      <Header />
      <div className={styles.content}>
        <Carousel />
        {products && <ItemsGrid products={products}/>}
      </div>
      
    </div>
  )
}

export default LandingPage