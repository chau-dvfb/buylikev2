import axios from 'axios';
import React, {Children, useEffect, useState} from 'react'
import {Navigate} from 'react-router-dom'
import { isAuthenticate } from './utils/Local';
type PrivateRouterProps = {
    children: JSX.Element;
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const [key, setKey] = useState<any[]>([])
   
    
    useEffect(() => {
       
        const getKey =  async () => {
                const {data} = await axios.get("https://bufflikea.herokuapp.com/keys");
                setKey(data)
                
                 
        }
        getKey()
    },[])
    const keys = isAuthenticate()
    
    const check = key.filter(item => item.name == keys.name)

    
    
    
    
    if(check) {
        return props.children
    }else {
        return <Navigate to="/" replace/>
       
    }
    
 
}

export default PrivateRouter