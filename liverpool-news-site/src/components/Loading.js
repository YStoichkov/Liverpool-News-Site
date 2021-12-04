import React from "react";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

const Loading = () => {
    const pStyle = {
        color: 'red'
    }

    return (
        <div align='center'>
            <p style={pStyle}>Loading...</p>
            <Loader
                type="Circles"
                color="red"
                height={100}
                width={100}
                timeout={3000}
            />
        </div>
    )
}

export default Loading;