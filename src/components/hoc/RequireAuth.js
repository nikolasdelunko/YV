import { useLocation, Navigate } from 'react-router-dom';
import React from 'react'
import { useSelector} from "react-redux"

function RequireAuth({children}) {
    const location = useLocation()
    const auth = useSelector((state) => state.helpers.login)
    // const auth = true
    
    if(!auth) {
        return <Navigate to='/login' state={{from: location}} />
    }
  return children
}

export {RequireAuth}