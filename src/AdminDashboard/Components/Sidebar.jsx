import React from "react";

export default function Sidebar() {
  return (
    <div className="w-1/5 bg-gray-900 text-white p-4 min-h-screen">
      <h2 className="text-xl font-bold">Grocery Management</h2>
      <ul className="mt-4 space-y-2">
        <li className="p-2 bg-gray-800 rounded">Dashboard</li>
        <li className="p-2 bg-gray-800 rounded">Grocery Management</li>
        <li className="p-2 bg-gray-800 rounded">Menu Items</li>
      </ul>
    </div>
  );
}
