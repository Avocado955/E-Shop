import styles from "./Carousel.module.scss";
// Displays images which can be changed to the next image

import { useEffect, useState } from "react"
import { getAllProductsWithMatchingField } from "../../services/product-services";


const Carousel = () => {
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

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

  //Classes
  const nextClass = `${styles.btn} ${styles.next}`;
  const prevClass = `${styles.btn} ${styles.prev}`;

  return (
    <div className={styles.carousel}>
      {featuredProducts && 
      <div className={styles.carousel_window}>
        <img src={featuredProducts[carouselIndex].imageURL} alt="" className={styles.img}/>
        <div className={styles.carousel_window_textSide}>
          <p>
            {featuredProducts[carouselIndex].name}
          </p>
        </div>
      </div>
      }
      <button className={nextClass} onClick={onNextBtn}><span>&#8680;</span></button>
      <button className={prevClass} onClick={onPreviousBtn}><span>&#8678;</span></button>
    </div>
  )
}

export default Carousel