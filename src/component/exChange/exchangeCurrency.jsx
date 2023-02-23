import React, { useState } from "react";
import ExChangeDropBox from "./exChangeDropBox";

function Currency({
  exchangeRate,
  symbols,
  setUserExChangeCountry,
  userExChangeCountry,
}) {
  const [isDropBox, setIsDropBox] = useState(false);
  const [dropBoxSearch, setDropBoxSearch] = useState("");
  const filter = symbols.filter((i) =>
    i.code.includes(dropBoxSearch.toLocaleUpperCase())
  );

  return (
    <article className="currencyBox">
      <div className="amount">
        <span>환전 : </span>
      </div>
      <div className="amountBox">
        <div className="amountInputBox">
          <input
            className="amountReadOnly"
            type="number"
            placeholder="0"
            readOnly
            value={exchangeRate.result}
          />
        </div>

        <button onClick={() => setIsDropBox(!isDropBox)} className="dropBox">
          {userExChangeCountry} ▼
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
                    <ExChangeDropBox
                      key={code}
                      symbols={code}
                      setUserExChangeCountry={setUserExChangeCountry}
                      setIsDropBox={setIsDropBox}
                      isDropBox={isDropBox}
                      setDropBoxSearch={setDropBoxSearch}
                    />
                  );
                })
              : filter.map((item) => {
                  const { code } = item;
                  return (
                    <ExChangeDropBox
                      key={code}
                      symbols={code}
                      setUserExChangeCountry={setUserExChangeCountry}
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
