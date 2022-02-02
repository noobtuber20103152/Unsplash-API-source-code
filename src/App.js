import './App.css';
import FrontPage from './components/FrontPage';
import Navbar from './components/Navbar';
import Photos from './components/Photos';
import Category from './components/Category'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Links from './components/Links';
function App() {
  const [Mode, SetMode] = useState('light')
  const [ModeName, SetModeName] = useState('Dark')
  const [ModeTextColor, SetModeTextColor] = useState('dark')
  function ChangeMode() {
    // console.log("Clicked")
    if (Mode == 'light') {
      SetMode('dark');
      SetModeName('Light')
      SetModeTextColor('light')
      return;
    }
    SetMode('light')
    SetModeName('Dark')
    SetModeTextColor('dark')
  }

  return (
    <>
      <Router>
        <Navbar ChangeMode={ChangeMode} ModeName={ModeName} ModeTextColor={ModeTextColor} Mode={Mode} />
        <Links Mode={Mode} />
        <Routes>
          <Route exact path='/' element={<FrontPage />}></Route>
        </Routes>
        <Routes>
          <Route exact path='/' element={<Photos Mode={Mode} />}></Route>
        </Routes>
        <Routes>
          <Route exact path='/nature' element={<Category category='nature' Mode={Mode} />}>
          </Route>
        </Routes>
        <Routes><Route exact path='/water' element={<Category category='water' Mode={Mode} />}></Route></Routes>
        <Routes><Route exact path='/animal' element={<Category category='animal' Mode={Mode} />}></Route></Routes>
        <Routes><Route exact path='/lifestyle' element={<Category category='lifestyle' Mode={Mode} />}></Route></Routes>
        <Routes><Route exact path='/crowd' element={<Category category='crowd' Mode={Mode} />}></Route></Routes>
        <Routes><Route exact path='/ice' element={<Category category='ice' Mode={Mode} />}></Route></Routes>
        <Routes><Route exact path='/football' element={<Category category='football' Mode={Mode} />}></Route></Routes>
      </Router>
    </>
  );
}

export default App;
