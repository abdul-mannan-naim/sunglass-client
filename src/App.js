import { Route, Routes } from 'react-router-dom';
import './App.css';
import Answers from './Components/Answers/Answers';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import Navbar from './Components/Shared/Navbar';
import NotFound from './Components/Shared/NotFound';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddSunglass from './Components/AddSunglass/AddSunglass';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/answers' element={<Answers></Answers>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/sunglass' element={<AddSunglass></AddSunglass>} ></Route> 
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>


      <ToastContainer />
    </div>
  );
}

export default App;
