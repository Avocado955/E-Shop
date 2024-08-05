import styles from "./Carousel.module.scss";
// Displays images which can be changed to the next image

import { useEffect, useState } from "react"
import { getAllProductsWithMatchingField } from "../../services/product-services";
import { useNavigate } from "react-router-dom";


const Carousel = () => {
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    getAllProductsWithMatchingField("featured", true).then((data) => setFeaturedProducts(data));
  }, [])

  //Button Functions
  const onNextBtn = () => {
    const newIndex = (carouselIndex + 1) % featuredProducts.length;
    console.log(newIndex);
    setCarouselIndex(newIndex);
  }
  
  const onPreviousBtn = () => {
    let newIndex = (carouselIndex - 1);
    if (newIndex < 0) {
      newIndex = featuredProducts.length -1;
    }
    console.log(newIndex);
    setCarouselIndex(newIndex);
  }

  const goToFeaturedProduct = () => {
    navigate(`/${featuredProducts[carouselIndex].id}`)
  }

  //Classes
  const nextClass = `${styles.btn} ${styles.next}`;
  const prevClass = `${styles.btn} ${styles.prev}`;

  return (
    <div className={styles.carousel}>
      {featuredProducts && 
      <div className={styles.carousel_window}>
        <img src={featuredProducts[carouselIndex].imageURL} alt="" className={styles.img}/>
        <div className={styles.carousel_window_textSide}>
          <h2>
            {featuredProducts[carouselIndex].colour + " " + featuredProducts[carouselIndex].name}
          </h2>
          <h3>
            ${featuredProducts[carouselIndex].price} AUD
          </h3>
          <button onClick={goToFeaturedProduct}>Product Page</button>
        </div>
      </div>
      }
      <button className={nextClass} onClick={onNextBtn}><span>&#8680;</span></button>
      <button className={prevClass} onClick={onPreviousBtn}><span>&#8678;</span></button>
    </div>
  )
}

export default Carousel