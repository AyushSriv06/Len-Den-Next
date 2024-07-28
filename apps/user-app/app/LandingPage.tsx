import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-500 min-h-screen text-gray-800">

      <main className="text-center flex flex-col items-center justify-center flex-grow px-6">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Manage your finances effortlessly.</h1>
        <p className="text-lg mb-8 drop-shadow-md">Take control of your finances with LeN-deN Wallet—your all-in-one financial management tool.</p>
        <div className="flex mb-4">
          <input type="text" placeholder="Enter your wallet ID" className="p-4 rounded-l-lg border border-r-0 border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
          <button className="p-4 bg-green-500 text-white rounded-r-lg hover:bg-green-600 transition">Login</button>
        </div>
        <p className="text-sm text-gray-200">Join over 50,000+ users who trust LeN-deN Wallet</p>
      </main>

      <section className="w-full flex justify-around py-12 bg-white shadow-inner">
        <div className="text-center">
          <div className="text-4xl mb-2">💸</div>
          <h2 className="font-bold text-xl">Easy Transfers</h2>
          <p className="text-gray-600">Quickly and easily transfer funds to any account.</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-2">🔗</div>
          <h2 className="font-bold text-xl">P2P Transfers</h2>
          <p className="text-gray-600">Send money to friends and family with just a few taps.</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-2">📊</div>
          <h2 className="font-bold text-xl">Dashboard</h2>
          <p className="text-gray-600">Monitor your financial activities and track your expenses.</p>
        </div>
      </section>

      <footer className="w-full py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2024 LeN-deN. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
