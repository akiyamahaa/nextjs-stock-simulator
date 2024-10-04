import React from "react";

const UserInfo = () => {
  return (
    <div className="flex flex-1 flex-row justify-between">
      <div className="space-y-1">
        <p className="text-base text-gray-800">Account Balance</p>
        <p className="text-base text-gray-400">$100,000.00</p>
      </div>
      <div className="space-y-1">
        <p className="text-base text-gray-800">Share</p>
        <p className="text-base text-gray-400">0</p>
      </div>
      <div className="space-y-1">
        <p className="text-base text-gray-800">Profit/Loss</p>
        <p className="text-base text-gray-400">$0.00</p>
      </div>
    </div>
  );
};

export default UserInfo;
