import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Logout = ({
    onLogout
}) => {
    const historyHook = useHistory();
    const cookies = new Cookies();

    cookies.remove('auth_cookie');
    onLogout();
    historyHook.push('/');
}

export default Logout;