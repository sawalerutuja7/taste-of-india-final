import React from "react";
import { ShoppingCart } from "lucide-react";

export default function AdminHeader({ adminName }) {
  return (
    <div className="sticky top-0 z-10 bg-white p-4 rounded-lg shadow-lg mb-6">
      {/* Header Content */}
      <div className="flex justify-between items-center">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-2">
          <ShoppingCart className="text-red-500" size={24} />
          <h1 className="text-lg font-bold text-gray-800">Grocery Management</h1>
        </div>

        {/* Right: Admin Name & Avatar */}
        <div className="flex items-center gap-3">
          <span className="text-gray-700 font-medium">{adminName}</span>
          <img
            src="https://th.bing.com/th/id/OIP.fk40Tf4GqLFw13TUHjzQiwAAAA?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
