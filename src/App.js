import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login"
import SignIn from './pages/Signup';
import Home from "./pages/HomePage/Home"
import { useContext } from 'react';
import { AuthContext } from './context/userContext/AuthContext';
import CreateNote from './components/CreateNote';
import Portal from './pages/Portal';
import EditNote from './components/EditNote';

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/home" /> : <SignIn />} />
        <Route path="/" element={user ? <Portal /> : <Navigate to="/" />} >
            <Route path="home" element={<Home />} />
            <Route path="create-note" element={<CreateNote />} />
            <Route path="home/:id" element={<EditNote />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
