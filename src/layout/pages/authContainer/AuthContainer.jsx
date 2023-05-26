import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthContainer = () => {
    return (
        <div>
            <div>auth</div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthContainer;