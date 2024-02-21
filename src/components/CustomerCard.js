import React from "react";

const CustomerCard = ({ email, firstname, lastname }) => {
  return (
    <div className="border max-w-96 flex flex-col rounded-xl p-6 m-3 bg-slate-100">
      <h1 className="text-lg ">Customer Details</h1>
      <div className="flex justify-between">
        <span>Email</span>
        <span className="font-medium">{email}</span>
      </div>
      <div className="flex justify-between">
        <span>Firstname</span>
        <span  className="font-medium">{firstname}</span>
      </div>
      <div className="flex justify-between">
        <span>Lastname</span>
        <span  className="font-medium">{lastname}</span>
      </div>
      <button className="mr-auto my-2 text-blue-600 ">
        View more details
      </button>
    </div>
  );
};

export default CustomerCard;
