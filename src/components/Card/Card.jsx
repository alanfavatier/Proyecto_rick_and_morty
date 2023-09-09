import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import styles from "./Card.module.css"

const Card = (props) => {
  const {
    image,
    id,
    name,
    status,
    species,
    gender,
    origin,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const { pathname } = useLocation();

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  };

  useEffect(() => {
    console.log(pathname);
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.cardContainer}>
      {isFav ? (
        <button className= {styles.button} onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      {pathname !== "/favorites" && (
        <button onClick={() => onClose(id)}>X</button>
      )}
      <Link to={`/detail/${id}`}>
        <h2 className={styles.name}>{name}</h2>
      </Link>
      <img className={styles.image} src={image} alt="" />
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
