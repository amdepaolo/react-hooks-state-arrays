import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    const updatedFoodArray = [...foods, newFood]
    setFoods(updatedFoodArray);
  }

  function handleLiClick(id) {
    const updatedFoodArray = foods.map(obj => {
      if(obj.id === id){
        return {
          ...obj,
          heatLevel: obj.heatLevel + 1
        }
        }
      else return obj;
    });
    setFoods(updatedFoodArray);
  }

  const [filterBy, setFilterBy] = useState("All");

  function handleSelect(e){
    console.log(filterBy);
    setFilterBy(e.target.value);
  }

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select onChange={handleSelect} name="filter">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;
