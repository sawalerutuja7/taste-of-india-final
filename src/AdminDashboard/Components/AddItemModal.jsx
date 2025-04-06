import React, { useState } from "react";
import { Modal, Input, Button } from "antd";

export default function AddItemModal({ isVisible, setIsVisible, setItems }) {
  const [newItem, setNewItem] = useState({
    ingredient: "",
    category: "",
    stock: "",
    unit: "",
    threshold: "",
    status: "Ok",
    supplier: "",
    lastUpdated: new Date().toISOString().split("T")[0], // Default today's date
  });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleAddItem = () => {
    if (!newItem.ingredient || !newItem.category || !newItem.stock) {
      alert("Please fill all required fields");
      return;
    }

    setItems((prevItems) => {
      const updatedItems = [...prevItems, { ...newItem, id: prevItems.length + 1 }];
      console.log("Updated items list:", updatedItems); // ✅ Debugging: Check if item is added
      return updatedItems;
    });

    setIsVisible(false); // Close modal
    setNewItem({ // Reset form fields
      ingredient: "",
      category: "",
      stock: "",
      unit: "",
      threshold: "",
      status: "Ok",
      supplier: "",
      lastUpdated: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <Modal title="Add New Item" open={isVisible} onCancel={() => setIsVisible(false)} footer={null}>
      <Input name="ingredient" placeholder="Ingredient" value={newItem.ingredient} onChange={handleChange} className="mb-2" />
      <Input name="category" placeholder="Category" value={newItem.category} onChange={handleChange} className="mb-2" />
      <Input name="stock" placeholder="Stock" type="number" value={newItem.stock} onChange={handleChange} className="mb-2" />
      <Input name="unit" placeholder="Unit (kg/litre)" value={newItem.unit} onChange={handleChange} className="mb-2" />
      <Input name="threshold" placeholder="Threshold" type="number" value={newItem.threshold} onChange={handleChange} className="mb-2" />
      <Input name="supplier" placeholder="Supplier" value={newItem.supplier} onChange={handleChange} className="mb-2" />
      <Button type="primary" onClick={handleAddItem} className="mt-2">Add Item</Button>
    </Modal>
  );
}
