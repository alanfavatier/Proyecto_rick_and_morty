import Cards from "../components/Cards/Cards"
import style from "./Home.module.css"

const HomeView = (props) => {
   const {characters, onClose} = props;
  return (
    <div >
        <Cards characters={characters} onClose={onClose} />
    </div>
  )
}

export default HomeView