import React, { useState } from "react";
import DropBoxList from "./dropBoxList";

function Currency({
  setCurrency,
  symbols,
  setUserCurrencyCountry,
  userCurrencyCountry,
}) {
  const [isDropBox, setIsDropBox] = useState(false);
  const [dropBoxSearch, setDropBoxSearch] = useState("");
  const filter = symbols.filter((i) =>
    i.code.includes(dropBoxSearch.toLocaleUpperCase())
  );

  return (
    <article className="currencyBox">
      <div className="amount">
        <span>금액 : </span>
      </div>
      <div className="amountBox">
        <div className="amountInputBox">
          <input
            onChange={(e) => setCurrency(e.target.value)}
            className="amountInput"
            type="number"
            placeholder="0"
          />
        </div>

        <button onClick={() => setIsDropBox(!isDropBox)} className="dropBox">
          {userCurrencyCountry} ▼
        </button>
      </div>
      {isDropBox && (
        <div>
          <ul className="dropBoxList">
            <div className="searchBox">
              <div className="magnifier" />
              <input
                onChange={(e) =>
                  setDropBoxSearch(e.target.value.toLocaleUpperCase())
                }
              ></input>
            </div>

            {dropBoxSearch === ""
              ? symbols.map((item) => {
                  const { code } = item;
                  return (
                    <DropBoxList
                      key={code}
                      symbols={code}
                      setUserCurrencyCountry={setUserCurrencyCountry}
                      setIsDropBox={setIsDropBox}
                      isDropBox={isDropBox}
                      setDropBoxSearch={setDropBoxSearch}
                    />
                  );
                })
              : filter.map((item) => {
                  const { code } = item;
                  return (
                    <DropBoxList
                      key={code}
                      symbols={code}
                      setUserCurrencyCountry={setUserCurrencyCountry}
                      setIsDropBox={setIsDropBox}
                      isDropBox={isDropBox}
                      setDropBoxSearch={setDropBoxSearch}
                    />
                  );
                })}
          </ul>
        </div>
      )}
    </article>
  );
}

export default Currency;
