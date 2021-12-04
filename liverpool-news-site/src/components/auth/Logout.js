import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Logout = ({
    onLogout
}) => {
    const cookies = new Cookies();
    cookies.remove('auth_cookie');
    onLogout();
    return (
        <Redirect to='/' />
    )
}

export default Logout;