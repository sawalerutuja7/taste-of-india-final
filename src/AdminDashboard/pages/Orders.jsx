import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const OrderManagement = () => {
  const [orderStats, setOrderStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    canceled: 0
  });
  
  const [completionRate, setCompletionRate] = useState(0);
  const [weeklyOrders, setWeeklyOrders] = useState([]);
  const [topSellingItems, setTopSellingItems] = useState([]);
  const [recentNotifications, setRecentNotifications] = useState([]);
  const [activeOrders, setActiveOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('All Orders');

  // Simulate loading data when component mounts or refreshes
  useEffect(() => {
    // Simulate API fetch delay
    const loadData = setTimeout(() => {
      // Set order statistics
      setOrderStats({
        total: Math.floor(Math.random() * (950 - 850 + 1)) + 850,
        completed: Math.floor(Math.random() * (780 - 700 + 1)) + 700,
        pending: Math.floor(Math.random() * (150 - 100 + 1)) + 100,
        canceled: Math.floor(Math.random() * (35 - 20 + 1)) + 20
      });

      // Generate random weekly data
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const weekData = days.map(day => ({
        day,
        orders: Math.floor(Math.random() * (100 - 40 + 1)) + 40
      }));
      setWeeklyOrders(weekData);

      // Set top selling items
      setTopSellingItems([
        { id: 1, name: 'Vadapav', orders: 184, price: '₹50.29' },
        { id: 2, name: 'Mix Veg Platter', orders: 157, price: '₹85.45' },
        { id: 3, name: 'Oreo Milkshake', orders: 132, price: '₹120.29' },
        { id: 4, name: 'Red Sauce Pasta', orders: 115, price: '₹90.38' }
      ]);

      // Set recent notifications
      setRecentNotifications([
        { id: 'ORD-2358', type: 'new', time: 'Just now' },
        { id: 'ORD-2353', type: 'completed', time: '15 minutes ago' },
        { id: 'ORD-2351', type: 'canceled', time: '45 minutes ago' }
      ]);

      // Set active orders
      setActiveOrders([
        { id: 'ORD-2358', customer: 'Raj Sharma', item: 'Vadapav', quantity: 2, status: 'Pending' },
        { id: 'ORD-2357', customer: 'Priya Patel', item: 'Mix Veg Platter', quantity: 1, status: 'Preparing' },
        { id: 'ORD-2356', customer: 'Amar Singh', item: 'Red Sauce Pasta', quantity: 1, status: 'Pending' }
      ]);

    }, 1000);

    return () => clearTimeout(loadData);
  }, []);

  // Calculate completion rate whenever orderStats changes
  useEffect(() => {
    const completed = orderStats.completed;
    const total = orderStats.total;
    if (total > 0) {
      setCompletionRate(Math.round((completed / total) * 100));
    }
  }, [orderStats]);

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Order Management</h1>
        <div className="flex items-center mb-4">
          <div className="relative flex-1 max-w-md">
           
          </div>
        </div>
      </div>

      {/* Order Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center">
            <div className="bg-pink-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.5 2M7 13h10l4-8H5.5M7 13L5.5 5M7 13l-2.25 4.5M17 16.5h-8.25M17 16.5L14.75 14M17 16.5l2.25-2.5" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-4xl font-bold text-gray-800">{orderStats.total}</h2>
              <p className="text-gray-600">Total Orders</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-4xl font-bold text-gray-800">{orderStats.completed}</h2>
              <p className="text-gray-600">Completed</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-4xl font-bold text-gray-800">{orderStats.pending}</h2>
              <p className="text-gray-600">Pending</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-4xl font-bold text-gray-800">{orderStats.canceled}</h2>
              <p className="text-gray-600">Canceled</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Graphs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Order Completion Rate */}
        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Order Completion Rate</h3>
          <div className="flex justify-center items-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="#f3f4f6" 
                  strokeWidth="10" 
                />
                {/* Progress circle */}
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="#f97316" 
                  strokeWidth="10" 
                  strokeDasharray={`${2 * Math.PI * 40 * completionRate / 100} ${2 * Math.PI * 40}`} 
                  strokeDashoffset="0" 
                  strokeLinecap="round" 
                  transform="rotate(-90 50 50)" 
                />
                <text 
                  x="50" y="50" 
                  textAnchor="middle" 
                  dominantBaseline="middle" 
                  fill="#4b5563" 
                  fontSize="16" 
                  fontWeight="bold"
                >
                  {completionRate}%
                </text>
                <text 
                  x="50" y="65" 
                  textAnchor="middle" 
                  dominantBaseline="middle" 
                  fill="#9ca3af" 
                  fontSize="8"
                >
                  Completion
                </text>
              </svg>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4 gap-8">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
              <span className="text-gray-600">Completed</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gray-200 mr-2"></div>
              <span className="text-gray-600">Pending</span>
            </div>
          </div>
        </div>

        {/* Orders Overview */}
        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Orders Overview</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyOrders}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="orders" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Selling Items & Recent Notifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Top Selling Items */}
        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Top Selling Items</h3>
          <div className="space-y-4">
            {topSellingItems.map(item => (
              <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex justify-center items-center mr-3">
                    <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.orders} orders</p>
                  </div>
                </div>
                <div className="text-orange-500 font-semibold">{item.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Order Notifications */}
        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Order Notifications</h3>
          <div className="space-y-4">
            {recentNotifications.map(notification => (
              <div key={notification.id} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex justify-center items-center mr-3">
                  <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-800">
                    {notification.type === 'new' ? `New order #${notification.id}` : 
                     notification.type === 'completed' ? `Order #${notification.id} completed` : 
                     `Order #${notification.id} cancelled`}
                  </h4>
                  <p className="text-sm text-gray-500">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Orders Section */}
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

export default OrderManagement;


