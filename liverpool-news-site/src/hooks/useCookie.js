import { useState } from "react";
import Cookies from "universal-cookie";

const useCookie = (initialValue) => {
    const cookies = new Cookies();
    const [state, setState] = useState(() => {
        try {
            let item = cookies.get('auth_cookie');

            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    });

    const setItem = (value) => {
        try {
            cookies.set('auth_cookie', value, { path: '/' });
            setState(value);
        } catch (error) {

        }
    }

    return [
        state,
        setItem,
    ]
}
export default useCookie;