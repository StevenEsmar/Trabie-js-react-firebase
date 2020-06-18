import React from 'react';
import './Login.css';
import  Auth from './auth'
//import { useFirebaseApp } from 'reactfire';
import {useUser} from 'reactfire';


function Login() {
    const user = useUser();

        return(
            
            <body className='container'>
                
                <img src={'logo.png'} alt="logoTrabie" //height="100px" width="100px"
                />
                <div className='name'>
                
                Traspaso de bienes educativos <p></p> <pre> la Universidad nacional.</pre>
                </div>             
                {user && <p>Usuario: {user.email}</p>}
                
                <Auth/>
            
            </body>
            
        )

    
}

export default Login;