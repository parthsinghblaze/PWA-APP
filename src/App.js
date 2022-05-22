import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import User from './pages/User';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path='user' element={<User />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
