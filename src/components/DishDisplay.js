import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import DishCard from "./DishCard";

export default function DishDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 justify-items-center ">
      {food_list.map((food, index) => {
        return category === "All" || category === food.category ? (
          <DishCard
            key={index}
            id={food._id}
            name={food.name}
            image={food.image}
            price={food.price}
            description={food.description}
            category={food.category}
          />
        ) : (
          <></>
        );
      })}
    </div>
  );
}
