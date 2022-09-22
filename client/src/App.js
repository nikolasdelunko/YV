import './App.css';
import React from "react";
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal'
import {useSelector} from "react-redux"
import ScrollButton from './components/ScrollBtn/ScrolBtn';
import AppRoutes from './routes/AppRoutes'
import { useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { addMobile } from "./store/helpers/helpersSlice";

function App() {
  const burger = useSelector((state) => state.helpers.burger)

	const dispatch = useDispatch();

  const mobileControl = useMediaQuery("(max-width:768px)");
  const desktopControl = useMediaQuery("(min-width:730px)");
  if (mobileControl === false) {
    dispatch(addMobile(false));
  } else if (desktopControl === false) {
    dispatch(addMobile(true));
  }
  return (
    <div className="App">
    <Navbar />
    {burger ? <Modal /> : <AppRoutes /> }
    <ScrollButton />
    </div>
  );
}

export default App;
