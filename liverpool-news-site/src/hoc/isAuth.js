import { useAuth } from '../contexts/AuthContext.js'
import { Redirect } from 'react-router-dom';

export const isAuth = (Component) => {
    const WrappedComponent = (props) => {
        const { isAuthenticated, user } = useAuth();
        return isAuthenticated ? <Component {...props} user={user} /> : <Redirect to='/login' />
    }
    return WrappedComponent;
}

export const notAuth = (Component) => {
    const WrappedComponent = (props) => {
        const { isAuthenticated, user } = useAuth();
        return isAuthenticated ? <Redirect to='/' /> : <Component {...props} user={user} />
    }
    return WrappedComponent;
}