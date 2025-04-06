import React from "react";
import DishCard from "./DishCard";

const DishList = ({ dishes, setEditingDish, setConfirmDelete }) => {
  return (
    <div className="mt-6 bg-white shadow-md rounded-lg p-6 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold text-orange-600 mb-4 text-center">Dishes List</h3>
      {dishes.length === 0 ? (
        <p className="text-center text-gray-500">No dishes added yet. Start by adding a new dish!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish) => (
            <div key={dish.id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
              {/* Dish Image */}
              {dish.image && (
                <img
                  src={URL.createObjectURL(dish.image)}
                  alt={dish.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
              )}

              {/* Dish Details */}
              <h4 className="text-lg font-semibold text-gray-800">{dish.name}</h4>
              <p className="text-gray-600">Category: <span className="font-medium">{dish.category}</span></p>
              <p className="text-orange-500 font-bold text-lg">₹{dish.price}</p>

              {/* Buttons */}
              <div className="flex justify-between mt-3">
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
                  onClick={() => setEditingDish(dish)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                  onClick={() => setConfirmDelete(dish.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DishList;
