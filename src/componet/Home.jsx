// import React from 'react';

function HomePage() {
  return (
    <div className="font-sans text-gray-800 w-full h-full">
      {/* /* Header */} 
      <header className="flex justify-between items-center p-6 bg-green-600 text-white">
        <div className="text-2xl font-bold">
          <h1>SolarXpert</h1>
        </div>
        <nav>
          <ul className="flex space-x-6 text-black">
            <li><a href="#home" className="text-black hover:text-gray-300">Home</a></li>
            <li><a href="#features" className="text-black hover:text-gray-300">Features</a></li>
            <li><a href="#reports" className="text-black hover:text-gray-300">Reports</a></li>
            <li><a href="#admin" className="text-black hover:text-gray-300">Admin</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <h2 className="text-4xl font-semibold mb-4">Welcome to SolarXpert</h2>
        <p className="text-lg mb-6">Efficiently monitor and manage your solar energy system for a sustainable future.</p>
        <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition">
          Learn More
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" id="features">
        <h3 className="text-3xl font-semibold text-center mb-10">Key Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">User Authentication</h4>
            <p>Secure login/signup for users and administrators.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Energy Tracking</h4>
            <p>Track your energy consumption in real-time and across different devices.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Energy Efficiency Reports</h4>
            <p>Get detailed reports of energy savings from solar usage.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Billing System</h4>
            <p>Calculate and pay your energy bills seamlessly.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Maintenance Reminders</h4>
            <p>Get notified about periodic maintenance for your solar system.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Device Management</h4>
            <p>Track and manage energy consumption of individual devices.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-6 text-center">
        <p>Contact us: info@smartsolar.com</p>
        <p>Follow us on social media!</p>
      </footer>
    </div>
  );
}

export default HomePage;
