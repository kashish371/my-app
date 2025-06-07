import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Myform from "./Myform";
import { About } from "./About";
import Events from "./Events";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Newcss from "./Newcss";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Navbar/>
  <Newcss/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About isLoggedin="true" />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
