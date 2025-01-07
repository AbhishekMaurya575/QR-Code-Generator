import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CreateQR from "./components/CreateQR.jsx";
import FindQRCode from "./components/FindQRCode.jsx";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />
      <Route
        path="/CreateQR"
        element={
          <>
            <Navbar />
            <CreateQR />
            <Footer />
          </>
        }
      />
      <Route
        path="/FindQRCode"
        element={
          <>
            <Navbar />
            <FindQRCode />
            <Footer />
          </>
        }
      />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
    <App />
  </StrictMode>
);
