import React, {Children} from 'react'
import {Navigate} from 'react-router-dom'
type PrivateRouterProps = {
    children: JSX.Element;
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const keys = JSON.parse(localStorage.getItem("keys") as string).name
    console.log(keys);
    if(keys) {
        return props.children
    }else {
        return <Navigate to="/key" />
    }
 
}

export default PrivateRouter