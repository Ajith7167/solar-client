import React, { useState } from 'react';
import { User, Mail, Home, Settings } from 'lucide-react';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Solar Street, Sunny City, SC 12345',
    systemSize: '8.5',
    installationDate: '2023-06-15',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile update:', profileData);
  };

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          {/* Profile Header */}
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Profile Settings</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Manage your account information and system preferences
            </p>
          </div>

          {/* Profile Form */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="col-span-1">
                  <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700">
                    <User className="h-5 w-5 text-gray-400 mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={profileData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700">
                    <Mail className="h-5 w-5 text-gray-400 mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={profileData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="address" className="flex items-center text-sm font-medium text-gray-700">
                    <Home className="h-5 w-5 text-gray-400 mr-2" />
                    Installation Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={profileData.address}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="systemSize" className="flex items-center text-sm font-medium text-gray-700">
                    <Settings className="h-5 w-5 text-gray-400 mr-2" />
                    System Size (kW)
                  </label>
                  <input
                    type="number"
                    name="systemSize"
                    id="systemSize"
                    value={profileData.systemSize}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="installationDate" className="flex items-center text-sm font-medium text-gray-700">
                    <Settings className="h-5 w-5 text-gray-400 mr-2" />
                    Installation Date
                  </label>
                  <input
                    type="date"
                    name="installationDate"
                    id="installationDate"
                    value={profileData.installationDate}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Save Changes
              </button>
            </div>
          </form>

          {/* System Information */}
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Total Energy Generated</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">12,458 kWh</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">CO₂ Emissions Saved</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">8.2 tons</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">System Health</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Excellent
                  </span>
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Last Maintenance Check</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">2024-02-15</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Warranty Status</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Active until 2030
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;