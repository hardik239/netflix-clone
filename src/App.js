import React, { useReducer } from "react";
import "./App.css";
import Row from "./Components/Row";
import requests from "./requests";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";

export const onePlayerContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "chechRowSync":
      return action.value;
    default:
      return state;
  }
};

function App() {
  const [onePlayer, dispatch] = useReducer(reducer, initialState);

  return (
    <onePlayerContext.Provider
      value={{ onePlayerState: onePlayer, onePlayerDispatch: dispatch }}>
      <div className="app">
        <Nav />
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
          rowNo={1}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} rowNo={2} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} rowNo={3} />
        <Row
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          rowNo={4}
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          rowNo={5}
        />
        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
          rowNo={6}
        />
        <Row
          title="Romantic Movies"
          fetchUrl={requests.fetchRomanceMovies}
          rowNo={7}
        />
        <Row
          title="Documentaries"
          fetchUrl={requests.fetchDocumentarMovies}
          rowNo={8}
        />
      </div>
    </onePlayerContext.Provider>
  );
}

export default App;
