import logo from './assets/logo.png';
import './App.css';

import NewNav from './components/Navbar';
import Home from "./components/Home"
import Resources from './components/Resources'
import Events from './components/Events'
import Forum from './components/Forum'
import Bazaar from './components/Bazaar'

import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <div className='bg-bisque rounded-3xl flex justify-center items-center mx-auto border-b-2 border-l-2 border-r-2 border-tan-400'>
        <NewNav />
      </div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/forum' element={<Forum/>} />
        <Route path='/bazaar' element={<Bazaar/>} />
      </Routes>
    </Router>
  )
}
