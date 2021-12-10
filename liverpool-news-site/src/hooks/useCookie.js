import { useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const useCookie = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            let item = cookies.get(key);
            return item ? item : initialValue
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