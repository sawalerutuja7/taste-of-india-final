import React, { useState, useEffect } from 'react';

<h1> Order Management</h1>
const OrderManagementDashboard = () => {
  const [activeTab, setActiveTab] = useState('All Orders');
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [chartVisible, setChartVisible] = useState(false);
  
  const topSellingItems = [
    { name: 'Vadapav', orders: 184, price: '₹50.29' },
    { name: 'Mix Veg Platter', orders: 157, price: '₹85.45' },
    { name: 'Oreo Milkshake', orders: 132, price: '₹120.29' },
    { name: 'Red Sauce Pasta', orders: 115, price: '₹90.38' },
  ];
  
  const recentNotifications = [
    { id: 'ORD-2358', status: 'New order', time: 'Just now' },
    { id: 'ORD-2353', status: 'completed', time: '15 minutes ago' },
    { id: 'ORD-2351', status: 'cancelled', time: '45 minutes ago' },
  ];
  
  const activeOrders = [
    { id: 'ORD-2358', customer: 'Raj Sharma', item: 'Vadapav', quantity: 2, status: 'Pending' },
    { id: 'ORD-2357', customer: 'Priya Patel', item: 'Mix Veg Platter', quantity: 1, status: 'Preparing' },
    { id: 'ORD-2356', customer: 'Amar Singh', item: 'Red Sauce Pasta', quantity: 1, status: 'Pending' },
  ];
  
  const weekdayData = [
    { day: 'Mon', orders: 45 },
    { day: 'Tue', orders: 60 },
    { day: 'Wed', orders: 35 },
    { day: 'Thu', orders: 70 },
    { day: 'Fri', orders: 75 },
    { day: 'Sat', orders: 65 },
    { day: 'Sun', orders: 50 },
  ];
  
  const getStatusIcon = (status) => {
    switch(status.toLowerCase()) {
      case 'completed':
        return <div className="bg-purple-100 p-3 rounded-full"><svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>;
      case 'pending':
        return <div className="bg-purple-100 p-3 rounded-full"><svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>;
      case 'cancelled':
        return <div className="bg-purple-100 p-3 rounded-full"><svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></div>;
      default:
        return <div className="bg-purple-100 p-3 rounded-full"><svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>;
    }
  };
  
  const getOrderIcon = () => (
    <div className="bg-purple-100 p-3 rounded-full">
      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </div>
  );

  // Simulating chart animation effect on load or refresh
  useEffect(() => {
    setChartVisible(false);
    const timer = setTimeout(() => {
      setChartVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [refreshing]);

  const refreshData = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <div className="p-6 bg-gray-100">
      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-4 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
          {getOrderIcon()}
          <div>
            <h2 className="text-3xl font-bold">892</h2>
            <p className="text-gray-600">Total Orders</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-4 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
          {getStatusIcon('completed')}
          <div>
            <h2 className="text-3xl font-bold">743</h2>
            <p className="text-gray-600">Completed</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-4 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
          {getStatusIcon('pending')}
          <div>
            <h2 className="text-3xl font-bold">121</h2>
            <p className="text-gray-600">Pending</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-4 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
          {getStatusIcon('cancelled')}
          <div>
            <h2 className="text-3xl font-bold">28</h2>
            <p className="text-gray-600">Canceled</p>
          </div>
        </div>
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium">Order Completion Rate</h3>
            <button onClick={refreshData} className="text-gray-500 hover:text-gray-700 transition-colors">
              <svg className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative h-48 w-48 flex items-center justify-center">
              <svg className="absolute" viewBox="0 0 100 100" width="100%" height="100%">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#f0f0f0" strokeWidth="10" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="#FF9500" 
                  strokeWidth="10" 
                  strokeLinecap="round" 
                  strokeDasharray="283" 
                  strokeDashoffset={chartVisible ? "70" : "283"} 
                  transform="rotate(-90 50 50)"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="text-center">
                <h2 className="text-3xl font-bold">{chartVisible ? "75%" : "0%"}</h2>
                <p className="text-gray-500">Completion</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
              <span>Completed</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-200 rounded-full mr-2"></div>
              <span>Pending</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium">Orders Overview</h3>
            <button onClick={refreshData} className="text-gray-500 hover:text-gray-700 transition-colors">
              <svg className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
          <div className="h-48 flex items-end justify-between space-x-2">
            {weekdayData.map((day, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="bg-orange-500 w-10 rounded-t-lg transition-all duration-1000 ease-out"
                  style={{ 
                    height: chartVisible ? `${day.orders / 75 * 100}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                ></div>
                <span className="mt-2 text-gray-600">{day.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
          
      {/* Items and Notifications Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-medium mb-4">Top Selling Items</h3>
          <div className="space-y-4">
            {topSellingItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-orange-2 transition-colors duration-200">
                <div className="flex items-center">
                  <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded mr-4">
                    <svg className="w-6 h-6 text-black-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.orders} orders</p>
                  </div>
                </div>
                <div className="text-orange-500 font-medium">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-medium mb-4">Recent Order Notifications</h3>
          <div className="space-y-4">
            {recentNotifications.map((notification, index) => (
              <div key={index} className="flex items-center p-2 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded mr-4">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">{notification.status} #{notification.id}</h4>
                  <p className="text-sm text-gray-500">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
          
      {/* Active Orders */}
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
        <div className="p-6 flex justify-between items-center">
          <h3 className="text-xl font-medium">Active Orders</h3>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md flex items-center transition-colors duration-300 hover:shadow">
            <span className="mr-2">+</span>
            <span>New Orders</span>
          </button>
        </div>
        
        <div className="px-6 pb-4">
          <div className="flex space-x-2 mb-4">
            <button 
              className={`py-2 px-4 rounded-md transition-colors duration-200 ${activeTab === 'All Orders' ? 'bg-orange-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('All Orders')}
            >
              All Orders
            </button>
            <button 
              className={`py-2 px-4 rounded-md transition-colors duration-200 ${activeTab === 'Pending' ? 'bg-orange-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('Pending')}
            >
              Pending
            </button>
            <button 
              className={`py-2 px-4 rounded-md transition-colors duration-200 ${activeTab === 'Preparing' ? 'bg-orange-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('Preparing')}
            >
              Preparing
            </button>
          </div>
          
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 font-semibold">Order ID</th>
                <th className="text-left py-4 font-semibold">Customer</th>
                <th className="text-left py-4 font-semibold">Item</th>
              </tr>
            </thead>
            <tbody>
              {activeOrders
                .filter(order => activeTab === 'All Orders' || order.status === activeTab)
                .map((order, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 transition-colors duration-200">
                    <td className="py-6">{order.id}</td>
                    <td className="py-6">{order.customer}</td>
                    <td className="py-6">
                      <div className="flex items-center">
                        <div className="bg-gray-200 w-10 h-10 rounded mr-3"></div>
                        <span>{order.item} ({order.quantity})</span>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-1">
              <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors duration-200">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors duration-200">3</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagementDashboard;