import React, { useState } from "react";

function List() {
  const [listData, setListData] = useState([1]);

  return (
    <ul>
      {listData.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default List
