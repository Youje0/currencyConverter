import React from "react";

function DropBoxList({
  symbols,
  setUserCurrencyCountry,
  setIsDropBox,
  isDropBox,
  setDropBoxSearch,
}) {
  const dropBoxHandler = (e) => {
    setUserCurrencyCountry(e.target.textContent);
    setIsDropBox(!isDropBox);
    setDropBoxSearch("");
  };
  return (
    <>
      <li onClick={(e) => dropBoxHandler(e)}>
        <button>{symbols}</button>
      </li>
    </>
  );
}

export default DropBoxList;
