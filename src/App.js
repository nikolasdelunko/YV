import './App.css';
import React from "react";
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal'
import {useSelector} from "react-redux"

import AppRoutes from './routes/AppRoutes'

function App() {
  const burger = useSelector((state) => state.helpers.burger)
  return (
    <div className="App">
    <Navbar />
    {burger ? <Modal /> : <AppRoutes /> }
    </div>
  );
}

export default App;
