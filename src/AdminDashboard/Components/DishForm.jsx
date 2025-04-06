import React, { useState, useEffect } from "react";

const DishForm = ({ addDish, updateDish, editingDish }) => {
  const [dish, setDish] = useState({ name: "", price: "", category: "", image: null });
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (editingDish) {
      setDish(editingDish);
      setImagePreview(editingDish.image || null);
    } else {
      setDish({ name: "", price: "", category: "", image: null });
      setImagePreview(null);
    }
  }, [editingDish]);

  const handleChange = (e) => {
    setDish({ ...dish, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDish({ ...dish, image: file });
      setImagePreview(URL.createObjectURL(file)); // Generate preview URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingDish) {
      updateDish(dish);
    } else {
      addDish(dish);
    }
    setDish({ name: "", price: "", category: "", image: null });
    setImagePreview(null);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">
        {editingDish ? "Edit Dish" : "Add New Dish"}
      </h2>

      
      <div className="space-y-4">
      <div className="grid grid-cols-2 gap-5">
        <input
          type="text"
          name="name"
          placeholder="Dish Name"
          value={dish.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-500"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={dish.price}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-500"
          required
        />
        </div>
        <div className="grid grid-cols-2 gap-5">

        
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={dish.category}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-500"
          required
        />

        {/* Image Upload Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-500"
          required
        />

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-2 flex justify-center">
            <img src={imagePreview} alt="Dish Preview" className="w-32 h-32 object-cover rounded-md shadow-md" />
          </div>
        )}
        </div>
        <div className="text-center">

        <button
          type="submit"
          className="w-1/3  bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition duration-300"
        >
          {editingDish ? "Update Dish" : "Add Dish"}
        </button>
        </div>
      </div>
    </form>
  );
};

export default DishForm;
