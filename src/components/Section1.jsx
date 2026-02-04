import React, { useState } from "react";

const Section1 = ({ UserList, setUserList, Budget, setBudget, setItem}) => {
  const [Activity, setActivity] = useState("");
  const [Amount, setAmount] = useState("");

  const printBudget = () => {
    let temp = [...UserList];
    temp.push({id:Date.now(), name: Activity, price: Amount });
    setUserList(temp);
    setItem(temp);
    setActivity("");
    setAmount("");
  };

  return (
    <div className="w-full md:w-1/2 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">

        {/* Budget Section */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">
            Monthly Budget
          </h2>

          <input
            type="number"
            placeholder="Enter your budget"
            min={0}
            value={Budget}
            onChange={(e) => {
              let val = e.target.value;
              if (val <= 10000) setBudget(val);
            }}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <p className="text-gray-600">
            Your budget: <span className="font-semibold">${Budget}</span>
          </p>
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Expense Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Add Expense
          </h2>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Activity
            </label>
            <input
              type="text"
              placeholder="e.g. Food, Travel"
              value={Activity}
              onChange={(e) => {
                let val = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(val)) setActivity(val);
              }}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Amount
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              value={Amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            onClick={printBudget}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
