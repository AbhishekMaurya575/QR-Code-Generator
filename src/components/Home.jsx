import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="h-[84.5vh]">
        <section className="grid grid-cols-2 h-[85.5vh]">
          <div className="bg-purple-100 flex flex-col gap-4 items-center justify-center">
            <p className="text-2xl font-bold">
              {" "}
              The best QR Code Generator in the Market
            </p>
            <p>We are the most straightfoward QR Code Generator in the world</p>
            <div className="flex justify-start gap-2">
              <NavLink
                to="/CreateQR"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-white"
                }
              >
                <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white">
                  Try Now
                </button>
              </NavLink>
              <NavLink
                to="/FindQRCode"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-white"
                }
              >
                <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white">
                  Find Now
                </button>
              </NavLink>
            </div>
          </div>
          <div className="bg-purple-100 flex justify-start relative"></div>
        </section>
      </main>
    </>
  );
};

export default Home;
