import React, { useState } from "react";
import QRCode from "qrcode";

const CreateQR = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [type, setType] = useState("url");

  const qrcodegenerator = async () => {
    const text = document.getElementById("text").value;

    if (text) {
      try {
        const url = await QRCode.toDataURL(text);
        setQrCodeUrl(url);
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Please enter text or URL");
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4 h-[67vh]">
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
          />
        </div>
        <button
          className="font-bold text-white my-3 bg-purple-500 rounded-lg shadow-lg p-3 py-1"
          onClick={qrcodegenerator}
        >
          Generate
        </button>
      </div>
      <div className="flex justify-center items-center bg-red-500 w-full h-full rounded-3xl">
        {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
      </div>
    </div>
  );
};

export default CreateQR;
