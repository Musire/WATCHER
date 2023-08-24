import { useAuth } from "../context/AuthContext"
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
    return (props) => {
      const { auth, isAuth } = useAuth();
      
      if (isAuth()) {
        return <Component {...props} />;
      } else {
        return <Navigate to="/login" />;
      }
    };
  };
  
  export default withAuth;