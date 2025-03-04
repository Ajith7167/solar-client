// import React from "react";
import { useNavigate } from "react-router-dom";

const SmartSolarLanding = () => {
    const navigate = useNavigate();


    const handleLogin = () => {
        navigate('/Login');
    };

    const handleSignUp = () => {
        navigate('/Register');
    };
    
    return (
        <div className="text-center bg-gray-100 min-h-screen">
            <header className="bg-yellow-400 py-6">
                <h1 className="text-3xl font-bold">Smart Solar Management</h1>
            </header>
            <section className="bg-cover bg-center text-white py-24" style={{ backgroundImage: "url('solar-bg.jpg')" }}>
                <h2 className="text-4xl font-bold">Efficient & Sustainable Solar Energy</h2>
                <p className="mt-4 text-lg">Monitor and optimize your solar power usage in real-time.</p>
                <div className="mt-6 space-x-4">
                    <button onClick={handleLogin} className="px-6 py-3 bg-blue-500 text-white text-lg rounded shadow-md hover:bg-blue-600">Login</button>
                    <button onClick={handleSignUp} className="px-6 py-3 bg-green-500 text-white text-lg rounded shadow-md hover:bg-green-600">Sign Up</button>
                </div>
            </section>
            <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">Real-Time Monitoring</h3>
                    <p className="mt-2">Track your solar energy production and consumption instantly.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">Smart Optimization</h3>
                    <p className="mt-2">Maximize efficiency with AI-driven solar management.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">Cost Savings</h3>
                    <p className="mt-2">Reduce electricity bills with intelligent energy distribution.</p>
                </div>
            </div>
        </div>
    );
};

export default SmartSolarLanding;
