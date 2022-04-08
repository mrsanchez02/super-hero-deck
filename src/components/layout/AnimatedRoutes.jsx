import { Routes, Route} from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

const AnimatedRoutes = () => {

  return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
  )
}

export default AnimatedRoutes