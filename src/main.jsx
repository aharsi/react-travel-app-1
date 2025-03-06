import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./Home.jsx";
import Places from "./Places.jsx";
import Place from "./Place.jsx";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl text-white font-semibold">Travel App</h1>
        <ul className="flex space-x-6">
          <li>
            <a
              href="/"
              className="text-white text-lg hover:text-blue-200 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/places"
              className="text-white text-lg hover:text-blue-200 transition-colors duration-300"
            >
              Places
            </a>
          </li>
        </ul>
        <div>
          <a
            href="/subscribe"
            className="bg-white text-blue-600 py-2 px-6 rounded-lg shadow-md hover:bg-blue-200 transition-all duration-300"
          >
            Subscribe
          </a>
        </div>
      </div>
    </nav>

    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="places" element={<Places />} />
        <Route path="places/:place" element={<Place />} />
      </Routes>
    </BrowserRouter>

    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-semibold mb-2">Travel App</h4>
            <p className="text-gray-400">
              Your gateway to exploring the world’s most amazing destinations.
              Discover, plan, and share your adventures.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="text-gray-400">
              <li>
                <a href="/" className="hover:text-blue-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/places"
                  className="hover:text-blue-600 transition-colors"
                >
                  Tourist Places
                </a>
              </li>
              <li>
                <a
                  href="/subscribe"
                  className="hover:text-blue-600 transition-colors"
                >
                  Subscribe
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-6 md:mt-0">
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://facebook.com/"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaFacebook /> Facebook
              </a>
              <a
                href="https://x.com/"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaTwitter /> Twitter
              </a>
              <a
                href="https://instagram.com/"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="https://youtube.com/"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaYoutube /> YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Travel App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </StrictMode>
);
