import React, { useState } from "react";
import DishForm from "../components/DishForm";
import DishList from "../components/DishList";
import ConfirmModal from "../components/ConfirmModal";

const ManageDishes = () => {
  const [dishes, setDishes] = useState([]);
  const [editingDish, setEditingDish] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const addDish = (dish) => {
    setDishes([...dishes, { ...dish, id: Date.now() }]);
  };

  const updateDish = (updatedDish) => {
    setDishes(dishes.map((dish) => (dish.id === updatedDish.id ? updatedDish : dish)));
    setEditingDish(null);
  };

  const deleteDish = (id) => {
    setDishes(dishes.filter((dish) => dish.id !== id));
    setConfirmDelete(null);
  };

  return (
    <div className="p-4">
       <h1 className="text-3xl font-bold text-center mb-6">Manage Dishes Page</h1>
      <DishForm addDish={addDish} updateDish={updateDish} editingDish={editingDish} />
      <DishList dishes={dishes} setEditingDish={setEditingDish} setConfirmDelete={setConfirmDelete} />

      {confirmDelete && (
        <ConfirmModal
          message="Are you sure you want to delete this dish?"
          onConfirm={() => deleteDish(confirmDelete)}
          onCancel={() => setConfirmDelete(null)}
        />
      )}
    </div>
  );
};

export default ManageDishes;
