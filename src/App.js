import React from 'react';
import { Switch, Route } from "react-router-dom";
import "./styles/style.css";


import Navbar from "./components/Navbar";
import KursusNav from "./components/KursusNav";
import Kursus from "./components/Kursus";
import Footer from "./components/Footer"


function App() {
  return (
    <div id="wrapper">
      <Navbar />
      <KursusNav />
      <div id="courses">
        <Kursus />
      </div>
      <Footer />
    </div>
  );
}

export default App;
