import React from "react";
import fakeData from "../../fakeData";

const Inventory = () => {
  const handleAddProducts = () => {
    fetch("https://young-headland-20901.herokuapp.com/addProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <button onClick={handleAddProducts}>Add Products</button>
    </div>
  );
};

export default Inventory;
