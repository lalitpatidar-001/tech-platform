import './App.css';
import { Route, Routes } from "react-router-dom"
import HomeLayout from './layout/HomeLayout';
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';
import TakeClass from './pages/TakeClass';
import VideoLibrary from './pages/VideoLibrary';
import Doubts from './pages/Doubts';
import Teach from './pages/Teach';

function App() {
  return (
    <Routes>
      <Route  exact path="/" element={<HomeLayout />}>
          <Route path="/dashboard"  element={<Dashboard/>}/>
          <Route index  element={<Teach/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/take-class" element={<TakeClass/>}/>
          <Route path="/video-library" element={<VideoLibrary/>}/>
          <Route path="/doubts" element={<Doubts/>}/>
      </Route>
    </Routes>
  );
}

export default App;
