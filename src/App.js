import './App.css';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal'
import {useSelector} from "react-redux"
import Main from './pages/Main/Main'

function App() {
  const burger = useSelector((state) => state.helpers.burger)
  return (
    <div className="App">
    <Navbar />
    {burger ? <Modal /> : <Main /> }
    </div>
  );
}

export default App;
