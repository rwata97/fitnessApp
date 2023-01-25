import { Routes, Route } from 'react-router-dom';
import RequiredAuth from '../requireAuth/RequireAuth';
import LoginLogic from './login/LoginLogic';
import Home from './home/Home';

const RoutesPath = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginLogic />} exact />

      {/* Protected Routes */}
      <Route element={<RequiredAuth />}>
        <Route path="/" element={<Home />} exact />
      </Route>
    </Routes>
  );
};

export default RoutesPath;
