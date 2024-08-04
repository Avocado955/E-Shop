import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

// The header banner with the sites logo

const Header = () => {
  return (
    <div className={styles.header} >
      <Link to={"/"} className={styles.links}>
      <p className={styles.header_text}>
        Threaded
        <br />
        Neat
      </p>
    </Link>
    </div>
  )
}
export default Header