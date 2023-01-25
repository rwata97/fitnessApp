import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// checks if token is present, if not redirects user
export default function RequiredAuth() {
  const token = useSelector((state) => state.auth.token);

  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
