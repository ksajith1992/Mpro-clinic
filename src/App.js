import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './Pages/Login';
import Navbar from './Pages/Components/Navbar';
import Specialities from './Pages/Specialities';
import Packages from './Pages/Packages';
import Aboutus from './Pages/Aboutus';
import Careers from './Pages/Careers';
import Home from './Pages/Home';
import Dashbord from './Pages/Dashbord';
import Footer from './Pages/Components/Footer';
import CareerDetails from './Pages/CareerDetails';
import Otoverification from './Pages/Otoverification';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Home' element={<Home/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/OTP-Verification' element={<Otoverification/>}/>
          <Route exact path='/Our-Specialities' element={<Specialities/>}/>
          <Route exact path='/Health-Packages' element={<Packages/>}/>
          <Route exact path='/About-Us' element={<Aboutus/>}/>
          <Route exact path='/Careers' element={<Careers/>}/>
          <Route exact path='/CareerDetails' element={<CareerDetails/>}/>
          <Route exact path='/Dashbord' element={<Dashbord/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
