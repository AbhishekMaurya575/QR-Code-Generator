import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="h-[84.5vh] ">
        <section className=" lg:flex   h-[85.5vh]">
          <div className="bg-purple-100 w-full  lg:w-1/2 h-1/2 lg:h-full flex flex-col gap-4 items-center justify-center lg:items-center lg:justify-center ">
            <p className="text-2xl font-bold items-center justify-center text-center ">
              {" "}
              The best QR Code Generator in the Market
            </p>
            <p className="text-center text-xl">We are the most straightfoward QR Code Generator in the world</p>
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
          <div className="bg-purple-100 h-1/2 lg:h-full   lg:w-1/2 flex justify-start relative w-full">hi</div>
        </section>
      </main>
    </>
  );
};

export default Home;
