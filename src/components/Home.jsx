import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Battery, Wind, Zap, CloudSun, BarChart3, ThermometerSun } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));

    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, [navigate]);

  const stats = [
    {
      title: "Current Power Output",
      value: "5.8 kW",
      change: "+12%",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      trend: "up"
    },
    {
      title: "Battery Level",
      value: "85%",
      change: "Charging",
      icon: <Battery className="h-6 w-6 text-green-500" />,
      trend: "neutral"
    },
    {
      title: "Today's Generation",
      value: "45.2 kWh",
      change: "+8%",
      icon: <Sun className="h-6 w-6 text-yellow-500" />,
      trend: "up"
    },
    {
      title: "Weather Condition",
      value: "Sunny",
      change: "25°C",
      icon: <CloudSun className="h-6 w-6 text-blue-500" />,
      trend: "neutral"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Welcome Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user?.name || 'User'}
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                {currentTime.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">System Status</p>
                <p className="text-sm text-green-600">Operating Normally</p>
              </div>
              <div className="bg-green-100 rounded-full p-2">
                <Sun className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {stat.icon}
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.title}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {stat.value}
                        </div>
                        <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                          stat.trend === 'up' ? 'text-green-600' : 
                          stat.trend === 'down' ? 'text-red-600' : 
                          'text-blue-600'
                        }`}>
                          {stat.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Details */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Power Generation Chart */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Power Generation</h2>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-500">Last 24 hours</span>
              </div>
            </div>
            <div className="mt-6 h-64 bg-gray-50 rounded border border-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Power Generation Chart</p>
            </div>
          </div>

          {/* Environmental Impact */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Environmental Impact</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Wind className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-sm text-gray-500">CO₂ Avoided</span>
                </div>
                <span className="text-sm font-medium text-gray-900">2.5 tons</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ThermometerSun className="h-5 w-5 text-yellow-500 mr-3" />
                  <span className="text-sm text-gray-500">Energy Savings</span>
                </div>
                <span className="text-sm font-medium text-gray-900">$345.20</span>
              </div>
              <div className="mt-6 bg-green-50 rounded-lg p-4">
                <p className="text-sm text-green-700">
                  Your solar system has prevented the equivalent of planting 150 trees this month!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* System Recommendations */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">System Recommendations</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
              <h3 className="font-medium text-yellow-900">Peak Production Time</h3>
              <p className="mt-1 text-sm text-yellow-700">
                Consider running high-power appliances between 10 AM and 2 PM for maximum efficiency.
              </p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
              <h3 className="font-medium text-blue-900">Weather Alert</h3>
              <p className="mt-1 text-sm text-blue-700">
                Clear skies predicted for the next 3 days - optimal for solar generation.
              </p>
            </div>
            <div className="border border-green-200 rounded-lg p-4 bg-green-50">
              <h3 className="font-medium text-green-900">Maintenance Due</h3>
              <p className="mt-1 text-sm text-green-700">
                Panel cleaning recommended in the next 2 weeks for optimal performance.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;