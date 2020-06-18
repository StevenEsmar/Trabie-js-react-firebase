import React, {useState} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';
import './Login.css';



export default (props) => {
    const [email, setEmail]=useState('');
    const [password,setPassword]=useState('');
    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async()=>{
        await firebase.auth().createUserWithEmailAndPassword(email,password);
    }
    const logout = async()=>{
        await firebase.auth().signOut();
    } 
    const login = async()=>{
        await firebase.auth().signInWithEmailAndPassword(email,password);
    }

    return(
        <div>
            
            {
               !user && 
            <div className="loginform">
                <h3>INICIAR SESIÓN <h4>_____________________</h4></h3>
                
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" onChange={(ev)=>setEmail(ev.target.value)}/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" onChange={(ev)=>setPassword(ev.target.value)}/>
                <p></p>
                <button className="btnlogin" onClick={login}>INGRESAR</button>
                <p></p>
                <div>¿No tienes cuenta?</div>
                
                <button onClick={submit}>Registrarse</button>
                
                
            </div>
            }
            {
                user && <button onClick={logout}>Cerrar sesión</button>
            }
            
        </div>
        
    )



}