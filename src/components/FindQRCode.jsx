import { useState } from "react";
import React from "react";
import service from "../appwrite/config";

const FindQRCode = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [documentData, setDocumentData] = useState(null);
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const fetchDocument = async () => {
    try {
      const document = await service.getDocument(username, password);
      if (document) {
        setDocumentData(document);
        setQrCodeUrl(document.data2);
      } else {
        alert("Invalid username or password. Please try again.");
      }
    } catch (err) {
      console.error("Error fetching document:", err);
      alert(
        "Document with the requested username could not be found. Please check the username and try again."
      );
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4 h-[67vh]">
      <h1 className="font-bold text-2xl">Find your QR Code</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          id="username"
          className="w-full text-xl pl-2 outline-none mt-4"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="password"
          className="w-full text-xl pl-2 outline-none mt-4"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="font-bold text-white my-3 bg-purple-500 rounded-lg shadow-lg p-3 py-1"
          onClick={fetchDocument}
        >
          Fetch Document
        </button>
      </div>
      <div className="flex justify-center items-center bg-red-500 w-full h-full rounded-3xl">
        {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
      </div>
    </div>
  );
};

export default FindQRCode;
