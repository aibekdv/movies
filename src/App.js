import { BrowserRouter, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

import Routes from "./config/Routes";
import tmdbApi, { movieType } from "./api/tmdbApi";

const App = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const response = await tmdbApi.getMoviesList(movieType.popular, { params: {} });
      setApi(response.results);
    }
    getApi();
  }, [])

  return (
    <>
      {
        api.length > 0 ? (
          <BrowserRouter>
            <Route
              render={(props) => (
                <>
                  <Header {...props} />
                  <Routes />
                  <Footer {...props} />
                </>
              )}
            />
          </BrowserRouter>
        ) : (
          <div className="loading">
            <Loader />
          </div>)
      }
    </>
  );
}

export default App;
