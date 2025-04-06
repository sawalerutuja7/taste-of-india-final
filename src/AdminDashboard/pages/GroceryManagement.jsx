import React, { useState } from "react";
import { Button, Input } from "antd";
import StatusCards from "../components/StatusCards";
import GroceryTable from "../components/GroceryTable";
import AddItemModal from "../components/AddItemModal";
import exportToCSV from "../utils/exportCSV";

export default function GroceryManagement() {
  const [items, setItems] = useState([
    { id: 1, ingredient: "Basmati Rice", category: "Grains", stock: 25, unit: "kg", threshold: 10, supplier: "India Gate", lastUpdated: "2024-05-15" },
    { id: 2, ingredient: "Tomatoes", category: "Vegetables", stock: 8, unit: "kg", threshold: 15, supplier: "Local Farm", lastUpdated: "2025-05-16" },
    { id: 3, ingredient: "Chicken", category: "Meat", stock: 3, unit: "kg", threshold: 5, supplier: "Fresh Poultry", lastUpdated: "2025-05-16" },
  ]);

  const [search, setSearch] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Dynamically Calculate Stats
  const lowStockCount = items.filter((item) => item.stock < item.threshold).length;
  const totalItems = items.length;
  const uniqueSuppliers = new Set(items.map((item) => item.supplier)).size;

  // Search Function
  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());
  const filteredItems = items.filter((item) => item.ingredient.toLowerCase().includes(search));

  return (
    <div className="flex min-h-screen bg-gray-50 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-xl p-6 my-8 border border-gray-100">
        {/* Status Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-36 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] hover:bg-gradient-to-br hover:from-orange-100 hover:to-orange-200 cursor-pointer group border border-orange-100">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-2 group-hover:bg-orange-500/20 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-gray-700 text-lg font-medium mb-1">Low Stock</h3>
            <p className="text-orange-600 text-4xl font-bold group-hover:scale-110 transition-all duration-300">{lowStockCount}</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-36 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200 cursor-pointer group border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-gray-500/10 flex items-center justify-center mb-2 group-hover:bg-gray-500/20 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="text-gray-700 text-lg font-medium mb-1">Total Items</h3>
            <p className="text-gray-700 text-4xl font-bold group-hover:scale-110 transition-all duration-300">{totalItems}</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-36 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] hover:bg-gradient-to-br hover:from-white hover:to-orange-50 cursor-pointer group border-2 border-orange-200">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-2 group-hover:bg-orange-500/20 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-gray-700 text-lg font-medium mb-1">Suppliers</h3>
            <p className="text-orange-500 text-4xl font-bold group-hover:scale-110 transition-all duration-300">{uniqueSuppliers}</p>
          </div>
        </div>

        {/* Search and Action Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-1/2 group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
              type="text" 
              className="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 focus:outline-none shadow-sm hover:shadow transition-all duration-200" 
              placeholder="Search ingredients..." 
              onChange={handleSearch}
            />
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <button
              onClick={() => setIsModalVisible(true)}
              className="px-5 py-3 text-white font-medium bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 w-full md:w-auto justify-center transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full text-white font-bold">+</span> 
              <span>Add New Item</span>
            </button>

            <button
              onClick={() => exportToCSV(items)}
              className="px-5 py-3 text-orange-600 font-medium bg-white border-2 border-orange-200 hover:bg-orange-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 w-full md:w-auto justify-center transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full text-orange-600 font-bold">↓</span>
              <span>Export Data</span>
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-100">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Ingredient</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Category</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Stock</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Unit</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Threshold</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Supplier</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Last Updated</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-orange-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.ingredient}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      item.stock < item.threshold 
                        ? 'bg-red-100 text-red-800 font-medium' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {item.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.unit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.threshold}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800">
                      {item.supplier}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.lastUpdated}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <button className="text-white bg-orange-500 hover:bg-orange-600 p-2 rounded-full shadow-sm hover:shadow transition-all duration-200 transform hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AddItemModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} setItems={setItems} items={items} />
      </div>
    </div>
  );
}