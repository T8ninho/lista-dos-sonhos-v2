import React, { useContext } from 'react';
import PROVEDOR from '../contexts/PROVEDOR';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes (){
    const { signed } = useContext(PROVEDOR);
    
    return signed ? <AppRoutes /> : <AuthRoutes />
};
