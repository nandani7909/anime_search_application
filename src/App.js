import React from "react";
import { Provider } from 'react-redux';
import { store } from './store/index';
import Animes from "./pages/animes";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Animes />
      </Provider>
    </>
  );
};

export default App;
