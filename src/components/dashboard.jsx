import React from 'react';
// import EnergyConsumption from '../components/EnergyConsumption';
// import DeviceManager from '../components/DeviceManager';
// import MaintenanceSchedule from '../components/MaintenanceSchedule';
import { Sun, Battery, BarChart3, Shield, DollarSign, Bell } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: "Total Generation",
      value: "234.5 kWh",
      change: "+12.5%",
      icon: <Sun className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Battery Status",
      value: "85%",
      change: "Charging",
      icon: <Battery className="h-6 w-6 text-green-500" />
    },
    {
      title: "Monthly Savings",
      value: "$345.20",
      change: "+18.2%",
      icon: <DollarSign className="h-6 w-6 text-blue-500" />
    },
    {
      title: "System Health",
      value: "Excellent",
      change: "All systems normal",
      icon: <Shield className="h-6 w-6 text-green-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">Solar Dashboard</h1>
          <button className="relative p-2 text-gray-400 hover:text-gray-500">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {stat.icon}
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.title}</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <EnergyConsumption />
          <DeviceManager />
        </div>

        <div className="mt-8">
          <MaintenanceSchedule />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;