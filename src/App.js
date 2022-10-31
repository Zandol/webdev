
import './App.css';
import Navbars from './Navbars';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Noservices from './pages/Noservices';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbars />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/apropos' element={<Apropos />} />
          <Route path='/noservices' element={<Noservices />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
