import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { Works } from './Components/Works'
import { TopNavbar } from './Components/TopNavbar'

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/works' element={ <Works /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes> */}
      <TopNavbar />
    </div>
  );
}

export default App;
