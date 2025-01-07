import React, { useState } from "react";
import QRCode from "qrcode";
import conf from "../conf/conf";
import service from "../appwrite/config";
import { ID } from "appwrite";

const CreateQR = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState("url");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");

  const resetState = () => {
    setPassword("");
    setUrl("");
    setUsername("");
    setTitle("");
  };

  const generateQRCode = async (text) => {
    try {
      const url = await QRCode.toDataURL(text);
      setQrCodeUrl(url);
      return url;
    } catch (err) {
      console.error("Error generating QR code:", err);
      throw err;
    }
  };

  const qrcodegenerator = async () => {
    const text = document.getElementById("text").value;
    resetState();

    if (text && username && password) {
      try {
        const documents = await service.getDocuments(username, password);
        if (documents.length > 0) {
          if (documents[0].password === password) {
            const url = await generateQRCode(text);
            resetState();
            alert("done");
            const uniqueTitle = ID.unique();
            await service.createDocument(
              {
                data: text,
                data2: url,
                password: password,
                title: title,
                username: username,
              },
              uniqueTitle
            );
          } else {
            alert("Password is not correct. Please try again.");
          }
        } else {
          const url = await generateQRCode(text);
          const uniqueTitle = ID.unique();
          resetState();
          await service.createDocument(
            {
              data: text,
              data2: url,
              password: password,
              title: title,
              username: username,
            },
            uniqueTitle
          );
        }
      } catch (err) {
        console.error("Error processing documents:", err);
      }
    } else {
      alert("Please enter text, username, and password.");
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-[60.5px] p-8 rounded-lg flex flex-col gap-4 h-[68vh]">
      <h1 className="font-bold text-2xl">Generate your QR Code</h1>
      <div className="flex flex-col gap-2">
        <div>
          <div className="flex justify-start gap-2">
            <button
              className="font-bold text-white my-3 bg-purple-500 rounded-lg shadow-lg p-3 py-1"
              onClick={() => {
                setType("url");
              }}
            >
              URL
            </button>
            <button
              className="font-bold text-white my-3 bg-purple-500 rounded-lg shadow-lg p-3 py-1"
              onClick={() => {
                setType("text");
              }}
            >
              Text
            </button>
            <button
              className="font-bold text-white my-3 bg-purple-500 rounded-lg shadow-lg p-3 py-1"
              onClick={() => {
                setType("email");
              }}
            >
              Email
            </button>
            <button
              className="font-bold text-white my-3 bg-purple-500 rounded-lg shadow-lg p-3 py-1"
              onClick={() => {
                setType("number");
              }}
            >
              Phone Number
            </button>
          </div>
          <input
            type={type}
            id="text"
            className="w-full text-xl pl-2 outline-none"
            placeholder={`Enter your ${type}`}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            type="password"
            id="password"
            className="w-full text-xl pl-2 outline-none mt-4"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            id="title"
            className="w-full text-xl pl-2 outline-none mt-4"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            id="username"
            className="w-full text-xl pl-2 outline-none mt-4"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button
          className="font-bold text-white my-2 bg-purple-500 rounded-lg shadow-lg p-3 py-1"
          onClick={qrcodegenerator}
        >
          Generate
        </button>
      </div>
      <div className="flex justify-center items-center w-full h-full rounded-3xl">
        {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
      </div>
    </div>
  );
};

export default CreateQR;
