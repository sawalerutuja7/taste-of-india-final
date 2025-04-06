import StatsCard from './StatusCards';
import InventoryTable from './InventoryTable';

const Dashboard = ({ items, currentPage, setCurrentPage }) => {
  const criticalItems = items.filter(item => item.currentStock <= item.threshold * 0.3).length;
  const longStockItems = items.filter(item => item.currentStock > item.threshold * 1.5).length;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Grocery Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatsCard title="Critical Items" value={criticalItems} subValue={longStockItems} subTitle="Long Stock" />
        <StatsCard title="Other Stock" value={items.length} subValue={15} subTitle="Total Items" />
      </div>

      <InventoryTable 
        items={items} 
        currentPage={currentPage} 
        itemsPerPage={10}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Dashboard;