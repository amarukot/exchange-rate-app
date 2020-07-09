import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

function App() {
  // const urlExchangeRateAPI = "https://openexchangerates.org/api/";
  const urlExchangeRateAPI = "https://open.exchangerate-api.com/v6/latest";

  const [rates, setRates] = useState([]);
  const [targetRateCode, setTargetRateCode] = useState("");
  const [baseAmount, setBaseAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState();

  useEffect(() => {
    fetch(urlExchangeRateAPI)
      .then((res) => res.json())
      .then((res) => setRates(res))
      .catch((err) => console.log(err));
  }, []);

  var currencyRates = [];
  var amount = (baseAmount * exchangeRate).toFixed(2);

  if (rates.length === 0) {
    return <div>LOADING...</div>;
  } else {
    currencyRates = rates.rates;
  }

  var currencyList = Object.keys(currencyRates);

  const handleChange = (e) => {
    setTargetRateCode(e.target.value);
    setExchangeRate(currencyRates[e.target.value]);
  };
  const changeBaseAmount = (e) => {
    setBaseAmount(e.target.value);
  };

  return (
    <div className="App">
      <h1>
        <input type="number" value={baseAmount} onChange={changeBaseAmount} />
        {rates.base_code}{" "}
      </h1>
      <label>
        Convert to:
        <select value={targetRateCode} onChange={handleChange}>
          {currencyList.map((val) => {
            return <option value={val}>{val}</option>;
          })}
        </select>
      </label>
      <br />
      <br />
      <input type="submit" value="submit" />

      <h2>Result {amount ? amount : "--"}</h2>
    </div>
  );
}

export default App;
