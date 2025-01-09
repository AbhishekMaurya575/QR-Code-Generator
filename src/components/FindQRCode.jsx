import { useState } from "react";
import React from "react";
import service from "../appwrite/config";

const FindQRCode = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [documents, setDocuments] = useState([]);
  const [qrCodeUrls, setQrCodeUrls] = useState([]);

  const resetState = () => {
    setFormData({ username: "", password: "" });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const fetchDocuments = async () => {
    try {
      const documents = await service.getDocuments(
        formData.username,
        formData.password
      );
      if (documents.length > 0) {
        resetState();
        setDocuments(documents.map((doc) => doc.title));
        setQrCodeUrls(documents.map((doc) => doc.data2));
        console.log("Documents found:", documents);
      } else {
        resetState();
        alert("Invalid username or password. Please try again.");
      }
    } catch (err) {
      console.error("Error fetching documents:", err);
      alert(
        "Documents with the requested username could not be found. Please check the username and try again."
      );
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100  my-16 p-8 rounded-lg flex flex-col gap-4 h-[67vh]">
      <h1 className="font-bold text-2xl">Find your QR Codes</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          id="username"
          className="w-full text-xl pl-2 outline-none mt-4"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          className="w-full text-xl pl-2 outline-none mt-4"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          className="font-bold text-white my-3 bg-purple-500 rounded-lg shadow-lg p-3 py-1"
          onClick={fetchDocuments}
        >
          Fetch Documents
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 justify-center items-center w-full h-full rounded-3xl py-3 gap-2">
          {qrCodeUrls.map((url, index) => (
            <div
              key={index}
              className="justify-center gap-0 items-center flex-col flex"
            >
              <img src={url} alt={`QR Code ${index + 1}`} />
              <h1>{documents[index]}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindQRCode;
