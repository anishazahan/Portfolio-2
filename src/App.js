
import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './Components/Footer/Footer';
import Menubar from './Components/Header/Menubar';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Projects/Portfolio';
import Services from './Pages/Services/Services';
import PortfolioDetails from './Pages/Projects/PortfolioDetails';

function App() {

  return (
    <>
    
     <Menubar/>
     <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/about' element={<About></About>}> </Route>
      <Route path='/service' element={<Services></Services>}> </Route>
      <Route path='/portfolio' element={<Portfolio></Portfolio>}> </Route>
      <Route path='/portfolio/:id' element={<PortfolioDetails></PortfolioDetails>}> </Route>
      <Route path='/blog' element={<Blogs></Blogs>}> </Route>
      <Route path='/contact' element={<Contact></Contact>}> </Route>
     </Routes>
     
     <Footer></Footer>
     
    </>
   
  );
}

export default App;
