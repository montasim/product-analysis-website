import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
