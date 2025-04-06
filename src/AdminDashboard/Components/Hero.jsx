import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from "recharts";
import { FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";

const pieData = [
  { name: "Achieved Income", value: 70, color: "#FFA500" }, 
  { name: "Remaining Income", value: 30, color: "#E0E0E0" }
];
const COLORS = ["#FFA500", "#E0E0E0"];

const barData = [
  { month: "Jan", orders: 10 }, { month: "Feb", orders: 18 }, { month: "Mar", orders: 5 },
  { month: "Apr", orders: 7 }, { month: "May", orders: 4 }, { month: "Jun", orders: 6 },
  { month: "Jul", orders: 12 }, { month: "Aug", orders: 16 }, { month: "Sep", orders: 8 },
  { month: "Oct", orders: 9 }, { month: "Nov", orders: 11 }, { month: "Dec", orders: 14 }
];

const lineData = [
  { month: "Jan", transactions: 90 }, { month: "Feb", transactions: 95 }, { month: "Mar", transactions: 85 },
  { month: "Apr", transactions: 88 }, { month: "May", transactions: 87 }, { month: "Jun", transactions: 90 },
  { month: "Jul", transactions: 92 }, { month: "Aug", transactions: 94 }
];
const recentOrders = [
  { 
    name: "Puran Poli", 
    price: "₹30.99", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzt7iiqDPdO6k62PNXsd27sW_npeOYPThoLQzwO9msQKWiUKOcX-3wraajzNXyJapEa4&usqp=CAU", 
    status: "Completed",
    orderid: "ORD-7829"
  },
  { 
    name: "Dosa ", 
    price: "₹45.50", 
    img: "https://photos.smugmug.com/Asia/India/i-Pf4hCQr/0/d3d38770/X2/indian-food-dosa-X2.jpg", 
    status: "Pending",
    orderid: "ORD-9134"
  },
  { 
    name: "Veggie Pizza", 
    price: "₹12.99", 
    img: "https://cookieandkate.com/images/2020/10/best-veggie-pizza-recipe-1.jpg", 
    status: "Preparing",
    orderid: "ORD-6247"
  }
];

const Hero = () => {
  
  return (
   <>
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Daily Target Income */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:bg-orange-50">
          <h2 className="font-bold text-lg mb-4">Daily Target Income</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie 
                data={pieData} 
                cx="50%" 
                cy="50%" 
                innerRadius={60} 
                outerRadius={80} 
                fill="#FFA500" 
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value, name, props) => [
                  `${value}%`, 
                  props.payload.name
                ]}
              />
              <Legend 
                layout="vertical" 
                verticalAlign="bottom" 
                align="center"
                formatter={(value, entry) => {
                  const color = entry.color;
                  return (
                    <span style={{ color }}>
                      {value} ({entry.payload.value}%)
                    </span>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-gray-700">
            Great Progress! <br />
            Our achievement incremented by <span className="text-red-500">₹ 5,00,000 /-</span>
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 flex items-center rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-orange-50 hover:translate-x-1">
            <FaShoppingCart className="text-3xl text-orange-500 mr-4" />
            <div>
              <p className="text-xl font-bold">892</p>
              <p className="text-gray-500">Orders +2.7%</p>
            </div>
          </div>
          <div className="bg-white p-4 flex items-center rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-blue-50 hover:translate-x-1">
            <FaUsers className="text-3xl text-blue-500 mr-4" />
            <div>
              <p className="text-xl font-bold">9,334</p>
              <p className="text-gray-500">Customers -0.5%</p>
            </div>
          </div>
          <div className="bg-white p-4 flex items-center rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-green-50 hover:translate-x-1">
            <FaUtensils className="text-3xl text-green-500 mr-4" />
            <div>
              <p className="text-xl font-bold">524</p>
              <p className="text-gray-500">Menu Items</p>
            </div>
          </div>
        </div>

        {/* Current Orders */}
        <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-orange-50">
          <h2 className="font-bold text-lg mb-4">Current Order</h2>
          <ul>
            <li className="flex items-center justify-between mb-4 p-2 rounded-lg transition-all duration-300 hover:bg-gray-100">
              <img src="https://images.pexels.com/photos/17433337/pexels-photo-17433337.jpeg?cs=srgb&dl=pexels-aditya-mara-425995080-17433337.jpg&fm=jpg" alt="Oreo Milkshake" className="w-12 h-12 rounded-md object-cover mr-4" />
              <span className="font-medium">Vadapav</span>
              <span className="ml-auto">₹50.29</span>
            </li>
            <li className="flex items-center justify-between mb-4 p-2 rounded-lg transition-all duration-300 hover:bg-gray-100">
              <img src="https://holycowvegan.net/wp-content/uploads/2020/03/veg-manchurian-7.jpg" alt="Mix Platter" className="w-12 h-12 rounded-md object-cover mr-4" />
              <span className="font-medium">Veg Manchurian</span>
              <span className="ml-auto">₹85.45</span>
            </li>
            <li className="flex items-center justify-between mb-4 p-2 rounded-lg transition-all duration-300 hover:bg-gray-100">
              <img src="https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/65c3cdd17e07a119ad625fda_chole-bhature.jpeg" alt="Oyster Sauce Squid" className="w-12 h-12 rounded-md object-cover mr-4" />
              <span className="font-medium">Chhole Bhature</span>
              <span className="ml-auto">₹90.38</span>
            </li>
            <li className="flex items-center justify-between p-2 rounded-lg transition-all duration-300 hover:bg-gray-100">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxXQavQm2NWLGi5moGxlstnwaBiT1DQAGLQ&s" alt="Oreo Milkshake" className="w-12 h-12 rounded-md object-cover mr-4" />
              <span className="font-medium">Oreo Milkshake</span>
              <span className="ml-auto">₹120.29</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-orange-50">
          <h2 className="font-bold text-lg mb-4">Month Mapping</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="orders" fill="#FFA500">
                <Tooltip 
                  formatter={(value, name) => [
                    `${value} Orders`, 
                    `Month: ${name}`
                  ]}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              <span className="inline-block w-3 h-3 bg-[#FFA500] mr-2"></span>
              Orange Bars: Number of Monthly Orders
            </p>
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-orange-50">
          <h2 className="font-bold text-lg mb-4">Transaction Growth</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Line 
                type="monotone" 
                dataKey="transactions" 
                stroke="#FFA500" 
                strokeWidth={3}
              >
                <Tooltip 
                  formatter={(value, name) => [
                    `${value} Transactions`, 
                    `Month: ${name}`
                  ]}
                />
              </Line>
            </LineChart>
          </ResponsiveContainer>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              <span className="inline-block w-3 h-3 bg-[#FFA500] rounded-full mr-2"></span>
              Orange Line: Monthly Transaction Volume
            </p>
          </div>
        </div>
      </div>

      {/* Recent Order Requests */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6 transition-all duration-300 hover:shadow-xl hover:bg-orange-50">
        <h2 className="font-bold text-lg mb-4">Recent Order Requests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentOrders.map((order, index) => (
            <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg shadow transition-all duration-300 hover:shadow-xl hover:bg-white hover:translate-y-1">
              <img src={order.img} alt={order.name} className="w-16 h-16 rounded-md object-cover mr-4" />
              <div>
                <p className="font-bold">{order.name}</p>
                <p className="text-gray-500">{order.price}</p>
                <p className="text-gray-700 font-medium">
                  <span className="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded-md text-xs">
                    {order.orderid}
                  </span>
                </p>
                <p className={`text-sm font-bold ${order.status === "Completed" ? "text-green-500" : order.status === "Pending" ? "text-yellow-500" : "text-red-500"}`}>
                  {order.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stock Management Table */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6 transition-all duration-300 hover:shadow-xl hover:bg-orange-50">
        <h2 className="font-bold text-lg mb-4">Stock Management</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse hidden sm:table">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Menu</th>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Price</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b transition-all duration-200 hover:bg-gray-100">
                <td className="p-2">Steam Momos</td>
                <td className="p-2">16/03/2025</td>
                <td className="p-2">Food</td>
                <td className="p-2">₹80.00</td>
                <td className="p-2 text-yellow-500">Pending</td>
              </tr>
              <tr className="border-b bg-orange-100 transition-all duration-200 hover:bg-orange-200">
                <td className="p-2">Mango Juice</td>
                <td className="p-2">15/03/2025</td>
                <td className="p-2">Beverage</td>
                <td className="p-2">₹60.55</td>
                <td className="p-2 text-green-500">Completed</td>
              </tr>
              <tr className="border-b bg-orange-100 transition-all duration-200 hover:bg-orange-200">
                <td className="p-2">Pav Bhaji</td>
                <td className="p-2">10/03/2025</td>
                <td className="p-2">Snacks</td>
                <td className="p-2">₹120.55</td>
                <td className="p-2 text-green-500">Completed</td>
              </tr>
              <tr className="bg-gray-200 transition-all duration-200 hover:bg-gray-300">
                <td className="p-2">Khaman Dhokla</td>
                <td className="p-2">12/03/2025</td>
                <td className="p-2">Snacks</td>
                <td className="p-2">₹60.00</td>
                <td className="p-2 text-yellow-500">Pending</td>
              </tr>
            </tbody>
          </table>

          {/* Mobile View */}
          <div className="sm:hidden">
            {[
              { menu: "Steam Momos", date: "16/03/2025", category: "Food", price: "₹80.00", status: "Pending", statusColor: "text-yellow-500", orderid: "ORD-5163" },
              { menu: "Mango Juice", date: "15/03/2025", category: "Beverage", price: "₹60.55", status: "Completed", statusColor: "text-green-500", orderid: "ORD-4752" },
              { menu: "Pavbhaji", date: "10/03/2025", category: "Snacks", price: "₹120.55", status: "Completed", statusColor: "text-green-500", orderid: "ORD-3941" },
              { menu: "Khaman Dhokla", date: "12/03/2025", category: "Snacks", price: "₹60.00", status: "Pending", statusColor: "text-yellow-500", orderid: "ORD-2837" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col border p-4 mb-4 bg-gray-100 rounded-md shadow-md transition-all duration-300 hover:shadow-xl hover:bg-orange-50 hover:translate-y-1">
                <p><strong>Menu:</strong> {item.menu}</p>
                <p><strong>Date:</strong> {item.date}</p>
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Price:</strong> {item.price}</p>
                <p><strong>Order ID:</strong> <span className="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded-md text-xs">{item.orderid}</span></p>
                <p className={`${item.statusColor}`}><strong>Status:</strong> {item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Hero;