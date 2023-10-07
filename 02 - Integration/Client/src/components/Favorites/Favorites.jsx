import { connect } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css"

const Favorites = (props) => {
  const { myFavorites } = props;

  return (
    <div className={style.favoriteContainer}>
      {myFavorites.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
