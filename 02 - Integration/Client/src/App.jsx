import { useState, useEffect } from "react";
// import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import PATHROUTES from "./helpers/PathRoutes.helper.js";
import HomeView from "./views/Home.view.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import styles from "./App.module.css"
import PORT from "../../Server/src/index.js";
// import SearchBar from "./components/SearchBar/SearchBar.jsx";
// import characters from "./data.js";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    
    const bodyClass =
      pathname === "/home"
        ? styles.home
        : pathname === "/favorites"
        ? styles.favorites
        : pathname === "/detail"
        ? styles.detail
        : pathname === "/about"
        ? styles.about
        : styles.default;

    //  clase CSS al <body>
    document.body.className = bodyClass;
  }, [pathname]);

  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const EMAIL = "";
  const PASSWORD = "";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  const onSearch = (id) => {
    axios(`http://localhost:${PORT}/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  return (
    <div >
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path={PATHROUTES.LOGIN} element={<Form login={login} />} />
        <Route
          path={PATHROUTES.HOME}
          element={<HomeView characters={characters} onClose={onClose} />}
        />
        {/* <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />}/> */}
        <Route path={PATHROUTES.ABOUT} element={<About />} />
        <Route path={PATHROUTES.DETAIL} element={<Detail />} />
        <Route path={PATHROUTES.FAVORITES} element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
