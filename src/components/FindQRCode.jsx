import React from "react";

const FindQRCode = () => {
  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4 h-[67vh]">
      <h1 className="font-bold text-2xl">Find your QR Code</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="p-4 py-2 rounded-md focus:outline-purple-600"
          placeholder="Enter your short URL text"
        />
        <input
          type="password"
          className="p-4 py-2 rounded-md focus:outline-purple-600"
          placeholder="Enter your password to get the Full link"
        />

        <button className="font-bold text-white my-3 bg-purple-500 rounded-lg shadow-lg p-3 py-1">
          Generate
        </button>
      </div>
    </div>
  );
};

export default FindQRCode;
