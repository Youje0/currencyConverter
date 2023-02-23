import React, { useState, useEffect } from "react";
import axios from "axios";
import Currency from "./component/currency/currency";
import ExchangeCurrency from "./component/exChange/exchangeCurrency";
import "./App.scss";
import "./style/reset.scss";

function App() {
  const [currency, setCurrency] = useState("");
  const [userCurrencyCountry, setUserCurrencyCountry] = useState("KRW");
  const [userExChangeCountry, setUserExChangeCountry] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState([]);
  const [symbols, setSymbols] = useState([]);
  const exchangeAdress = process.env.REACT_APP_exchangeAdress;
  const symbolsAdress = process.env.REACT_APP_symbolsAdress;
  const exchangeAPI = `${exchangeAdress}?from=${userCurrencyCountry}&to=${userExChangeCountry}&amount=${currency}&places=2`;
  const symbolsAPI = symbolsAdress;

  useEffect(() => {
    axios.get(exchangeAPI).then((res) => {
      setExchangeRate(res.data);
    });
    axios.get(symbolsAPI).then((res) => {
      setSymbols(res.data.symbols);
    });
  }, [currency, userCurrencyCountry, userExChangeCountry]);

  return (
    <div className="container">
      <section className="calculatorWrapper">
        <div className="converteArea">
          <article className="converteCurrencyBox">
            <span>
              {currency} {userCurrencyCountry} = {exchangeRate.result}{" "}
              {userExChangeCountry}
            </span>
          </article>
        </div>
        <div className="currencyArea">
          <Currency
            setCurrency={setCurrency}
            symbols={symbols}
            setUserCurrencyCountry={setUserCurrencyCountry}
            userCurrencyCountry={userCurrencyCountry}
          />

          <ExchangeCurrency
            symbols={symbols}
            setUserExChangeCountry={setUserExChangeCountry}
            userExChangeCountry={userExChangeCountry}
            exchangeRate={exchangeRate}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
