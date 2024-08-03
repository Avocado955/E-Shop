import Header from "../../components/Header/Header";
import ItemCard from "../../components/ItemCard/ItemCard";
import styles from "./LandingPage.module.scss";

// Home page with title, carousel and items grid


const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <Header />
      <div className={styles.content}>
        <ItemCard img="https://img.freepik.com/free-psd/psd-blue-hoodie-mockup_1409-3750.jpg?ga=GA1.1.1657426917.1721964726&semt=ais_hybrid" itemName="Hoodie"/>
      </div>
    </div>
  )
}

export default LandingPage