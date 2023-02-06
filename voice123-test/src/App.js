import './App.css';
import Landing from './pages/Landing';
import ActorProfile from './pages/ActorProfile'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/:username' exact element={<ActorProfile />} />
      </Routes>
    </>
  );
}

export default App;
