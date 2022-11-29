
import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './Components/Footer/Footer';
import Menubar from './Components/Header/Menubar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
     <Menubar/>
     <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
     </Routes>
     
     <Footer></Footer>
    </>
   
  );
}

export default App;
