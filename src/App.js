import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import GalleryPage from "./pages/GalleryPage.js";
import StaffPage from "./pages/StaffPage.js";
import OrderPage from "./pages/OrderPage.js";
import products from "./data/products.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route
                path="/order"
                element={<OrderPage products={products} />}
              />
              <Route path="/staff" element={<StaffPage />} />
            </Routes>
          </section>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
