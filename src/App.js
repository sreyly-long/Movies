// import './App.css';
import Navbars from './components/Navbar';
import './App.css'
import Footer from './components/Footer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NowShowing from './pages/NowShowing';
import ComingSoon from './pages/ComingSoon';
import Contact from './pages/Contact';
import TopRate from './pages/TopRate';
import Popular from './pages/Popular';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <div className="App"> 
    <Navbars/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/now_showing' Component={NowShowing}/>
          <Route exact path='/coming_soon' Component={ComingSoon}/>
          <Route exact path='/popular' Component={Popular}/>
          <Route exact path='/top_rate' Component={TopRate}/>
          <Route exact path='/contact' Component={Contact}/>
          <Route path='/now_showing/:id' Component={MovieDetail}/>
        </Routes> 
      <Footer/>        
    </div>
  );
}

export default App;
