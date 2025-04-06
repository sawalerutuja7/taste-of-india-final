import React from "react";

const DishCard = ({ dish, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h4 className="text-lg font-semibold">{dish.name}</h4>
      <p className="text-sm">Category: {dish.category}</p>
      <p className="text-sm font-bold">₹{dish.price}</p>
      <div className="mt-2">
        <button onClick={onEdit} className="bg-green-500 text-white px-3 py-1 rounded mr-2">
          Edit
        </button>
        <button onClick={onDelete} className="bg-red-500 text-white px-3 py-1 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DishCard;
