import { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { isAuth } from '../../hoc/isAuth.js'
import { AuthContext } from '../../contexts/AuthContext.js';

const Logout = () => {
    const { logout } = useContext(AuthContext)

    useEffect(() => {
        logout();
    })

    return (
        <Redirect to='/' />
    )
}

export default isAuth(Logout);