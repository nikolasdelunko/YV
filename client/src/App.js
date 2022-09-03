import './App.css';
import React from "react";
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal'
import {useSelector} from "react-redux"
import ScrollButton from './components/ScrollBtn/ScrolBtn';
import AppRoutes from './routes/AppRoutes'


function App() {
  const burger = useSelector((state) => state.helpers.burger)
  return (
    <div className="App">
    <Navbar />
    {burger ? <Modal /> : <AppRoutes /> }
    <ScrollButton />
    </div>
  );
}

export default App;
