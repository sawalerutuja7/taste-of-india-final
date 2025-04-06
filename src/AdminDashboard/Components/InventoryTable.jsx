const InventoryTable = ({ items, currentPage, itemsPerPage, setCurrentPage }) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(items.length / itemsPerPage);
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Inputs</h3>
          <div className="grid grid-cols-5 gap-4 text-xs text-gray-500 mt-2">
            <span>Inspection: Category</span>
            <span>Current Stock: Unit</span>
            <span>Threshold</span>
            <span>Status: Supplier</span>
            <span>Last Updated Actions</span>
          </div>
        </div>
  
        <div className="space-y-2">
          {paginatedItems.map((item, index) => (
            <div key={item.id} className="grid grid-cols-5 gap-4 p-2 border-b border-gray-100 hover:bg-gray-50">
              <div>
                <span className="text-gray-500">{startIndex + index + 1}.</span> {item.name}
                <div className="text-xs text-gray-400">{item.category}</div>
              </div>
              <div>
                {item.currentStock}
                <div className="text-xs text-gray-400">{item.unit}</div>
              </div>
              <div className="text-xs text-gray-400">{item.threshold}</div>
              <div>
                <span className="text-xs">({item.status})</span>
                <div className="text-xs text-gray-400">{item.supplier}</div>
              </div>
              <div className="text-xs text-gray-400">{item.lastUpdated}</div>
            </div>
          ))}
        </div>
  
        <div className="flex justify-between items-center mt-4 text-sm">
          <span className="text-gray-500">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default InventoryTable;