import styles from "./Header.module.scss";

// The header banner with the sites logo

const Header = () => {
  return (
    <div className={styles.header} >
      <p className={styles.header_text}>
        Threaded
        <br />
        Neat
      </p>
    </div>
  )
}
export default Header