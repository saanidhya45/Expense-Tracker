import React from "react";

const Section2 = ({ UserList, setUserList, Budget, setItem }) => {
    
  const totalAmount = UserList.reduce(
    (acc, curr) => acc + Number(curr.price),
    0
  );

  const remaining = Budget - totalAmount;

  const updateList = (id) =>{
    let temp = [...UserList];
    const index = temp.findIndex((value)=>{
        return value.id === id;
    })
    temp.splice(index,1);
    setUserList(temp);
    setItem(temp);
  }

  return (
    <div className="w-full md:w-1/2 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-5">

        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Expense Summary
        </h2>

        {/* Expense List */}
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {UserList.length === 0 ? (
            <p className="text-center text-gray-500">
              No expenses added yet
            </p>
          ) : (
            UserList.map((value, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-2"
              >
                <p className="font-medium text-gray-700">
                  {value.name}
                </p>

                <span className="text-gray-800 font-semibold">
                  ${value.price}
                </span>

                <button
                 onClick={(e)=>{
                    updateList(value.id)
                 }}
                 className="text-red-500 font-bold cursor-pointer hover:scale-110 transition">
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Budget Info */}
        <div className="space-y-2">
          <div className="flex justify-between bg-blue-100 text-blue-800 rounded-lg px-4 py-2">
            <span>Total Budget</span>
            <span className="font-semibold">${Budget}</span>
          </div>

          <div
            className={`flex justify-between rounded-lg px-4 py-2 ${
              remaining >= 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            <span>Remaining</span>
            <span className="font-semibold">
              ${remaining}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
