import React from "react";

function exChangeDropBox({
  symbols,
  setUserExChangeCountry,
  setIsDropBox,
  isDropBox,
  setDropBoxSearch,
}) {
  const dropBoxHandler = (e) => {
    setUserExChangeCountry(e.target.textContent);
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

export default exChangeDropBox;
