import React, { useContext } from 'react';
import { Context } from '../Context'
import { Navigate } from 'react-router-dom';

export const ProtectedPage = ({ children }) => {
    const { isAuth } = useContext(Context);

    return isAuth? (
        <div>
            {children}
        </div>
    ) : <Navigate to="/login" />
}