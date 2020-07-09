import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

function App() {
  const urlExchangeRateAPI = "https://openexchangerates.org/api/";

  const [rates, setRates] = useState([]);

  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    fetch(urlExchangeRateAPI)
      .then((res) => res.json())
      .then((res) => setRates(res))
      .catch((err) => console.log(err));
  }, []);

  // const searchFunc = str => {
  //   setSearchString(str);
  // };

  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
}

export default App;
