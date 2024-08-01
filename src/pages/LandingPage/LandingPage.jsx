import styles from "./LandingPage.module.scss";

// Home page with title, carousel and items grid


const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.banner}>
        Title
      </div>
      <div className={styles.content}>
        This is gonna be the cards items
      </div>
    </div>
  )
}

export default LandingPage