import axios from 'axios';
import React, {Children, useEffect, useState} from 'react'
import {Navigate} from 'react-router-dom'
type PrivateRouterProps = {
    children: JSX.Element;
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const [key, setKey] = useState<any[]>([])
    useEffect(() => {
        console.log("fuckbitch");
        const getKey =  async () => {
                const {data} = await axios.get("https://bufflikea.herokuapp.com/keys");
                setKey(data)
        }
        getKey
    },[])
    const keys = JSON.parse(localStorage.getItem("keys") as string).name
    const check = key.filter((item) => item.name == keys);
    
    if(check) {
        return props.children
    }else {
        return <Navigate to="https://tanglike.app/key" />
    }
 
}

export default PrivateRouter