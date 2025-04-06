import React from "react";

export default function StatusCards({ lowStockCount, totalItems, uniqueSuppliers }) {
  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
      <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-lg font-bold">Low Stock</h2>
        <p className="text-2xl font-semibold">{lowStockCount}</p>
      </div>

      <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-lg font-bold">Total Items</h2>
        <p className="text-2xl font-semibold">{totalItems}</p>
      </div>

      <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-lg font-bold">Suppliers</h2>
        <p className="text-2xl font-semibold">{uniqueSuppliers}</p>
      </div>
    </div>
  );
}
