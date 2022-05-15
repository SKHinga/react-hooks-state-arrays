import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filtered, setFiltered] = useState("All");

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    setFoods([...foods, newFood])
  }

  function handleLiClick(id){
    const oneMore = foods.filter(food => food.id !== id
    //   {
    //     if(food.id===id){
    //       return{
    //         ...food,
    //         heatLevel: food.heatLevel + 1
    //       }
    //     } else {
    //       return food;
    //     }
    // }
    );

    setFoods(oneMore)
  }

  function handlefiltered(event){
    setFiltered(event.target.value);
  }

  const foodToDisplay = foods.filter((food)=>{
    if (filtered === "All"){
      return true;
    } else {
      return food.cuisine === filtered
    }
  })

  const foodList = foodToDisplay.map((food) =>{
    return (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
    )
  });

  return (
    <div>
      <select name="filter" onChange={handlefiltered}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
    </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
