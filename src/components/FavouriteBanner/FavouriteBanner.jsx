import { useEffect, useState } from "react";
import styles from "./FavouriteBanner.module.scss";
import { updateFavouritedField } from "../../services/product-services";
// Makes a banner across the top of any prodcuts that are favourited

const FavouriteBanner = ({ value, id }) => {
  const [favourite, setFavourite] = useState(value);
  let bannerStyle = styles.favouriteBanner + " ";
  if (value === true) {
    bannerStyle += styles.gold;
  } else {
    bannerStyle += styles.black;
  }

  useEffect(() => {
    updateFavouritedField("favourite", favourite, id);
  }, [favourite]);

  const onFavouriteClick = () => {
    newValue = !favourite;
    setFavourite(newValue);
  };

  return (
    <div className={bannerStyle}>
      {favourite ? <span>★</span> : <span>☆</span>}
    </div>
  );
};
export default FavouriteBanner;
