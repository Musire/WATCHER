import jwt_decode from 'jwt-decode';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
    return class WithAuth extends Component {
        render() {
            const token = localStorage.getItem('token')

            if (!token) {
                console.log('no authorization')
                return <Navigate to="/login" />
            }

            const decodedToken = jwt_decode(token)
            const id = decodedToken.id
            const name = decodedToken.name

            return <WrappedComponent {...this.props} user={{id: id, name: name}}/>
        }
    }
}
 
export default withAuth;