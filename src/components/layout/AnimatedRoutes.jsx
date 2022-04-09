import { Routes, Route} from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import ProtectedRoutes from '../routes/protectedRoutes';

const AnimatedRoutes = () => {

  return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route element={<ProtectedRoutes />} >
              <Route path="/" element={<Home />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
  )
}

export default AnimatedRoutes