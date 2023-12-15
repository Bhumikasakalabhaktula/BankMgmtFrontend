import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 
function RouteProtection() {
  const navigate = useNavigate();
 
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('role');
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [navigate]);
 
  return navigate;
}
 
export default RouteProtection;