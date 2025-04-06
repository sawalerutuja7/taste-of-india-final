import React from "react";

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button onClick={onCancel} className="bg-gray-500 text-white px-3 py-1 rounded mr-2">
            Cancel
          </button>
          <button onClick={onConfirm} className="bg-red-500 text-white px-3 py-1 rounded">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
