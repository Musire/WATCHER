import { useAuth } from "../context/AuthContext"
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
    return (props) => {
      const { auth, isAuthenticated } = useAuth();

  
      if (isAuthenticated()) {
        return <Component {...props} user={auth} />;
      } else {
        return <Navigate to="/login" />;
      }
    };
  };
  
  export default withAuth;