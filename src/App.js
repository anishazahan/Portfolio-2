
import { Route, Routes } from 'react-router';
import './App.css';
import Menubar from './Components/Header/Menubar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
     <Menubar/>
     <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
     </Routes>
     
      
    </>
  );
}

export default App;
