import React, { useEffect } from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default function GroceryTable({ items, setItems }) {
  useEffect(() => {
    console.log("GroceryTable received items:", items); // ✅ Debugging: Check if table updates
  }, [items]);

  // 🔥 Function to delete an item
  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-blue-600 text-white text-lg">
            <th className="p-3 text-left">Ingredient</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Stock</th>
            <th className="p-3 text-left">Unit</th>
            <th className="p-3 text-left">Threshold</th>
            <th className="p-3 text-left">Supplier</th>
            <th className="p-3 text-left">Last Updated</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100 transition">
                <td className="p-3">{item.ingredient}</td>
                <td className="p-3">{item.category}</td>
                <td className={`p-3 font-semibold ${item.stock <= item.threshold ? "text-red-500" : "text-green-600"}`}>
                  {item.stock}
                </td>
                <td className="p-3">{item.unit}</td>
                <td className="p-3">{item.threshold}</td>
                <td className="p-3">{item.supplier}</td>
                <td className="p-3">{item.lastUpdated}</td>
                <td className="p-3 text-center">
                  <Button
                    type="primary"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(item.id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="p-3 text-center text-gray-500">
                No items available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
