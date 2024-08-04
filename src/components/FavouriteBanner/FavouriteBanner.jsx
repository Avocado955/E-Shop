import styles from "./FavouriteBanner.module.scss";
// Makes a banner across the top of any prodcuts that are favourited

const FavouriteBanner = () => {
  return (
    <div className={styles.favouriteBanner}>
      <span>★</span>
    </div>
  )
}
export default FavouriteBanner