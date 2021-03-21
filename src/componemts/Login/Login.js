import React, { useContext, useState } from 'react';
import './Login.css';
import Google from '../Img/google.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUSer, setLoggedInUser] = useContext(UserContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isLoggedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false,
    })
    const handleGoogle = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const userInfo = {
                    isLoggedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,

                }
                setUser(userInfo);
                setLoggedInUser(userInfo);
                history.push(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    const handleInputField = (e) => {
        console.log(e.target.name, e.target.value);
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPassValid = e.target.value > 6;
            const passHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPassValid && passHasNumber;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    console.log(error)
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = { ...user };
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo)
                setLoggedInUser(newUserInfo);
                history.push(from);
            })
            .catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                console.log(error)
            });
        }
    }
    return (
        <div className=" form-div container d-flex justify-content-center align-item-center">
            <form onSubmit={handleSubmit} action="">
                <div className="login-box">
                    <h1>Login <span>OR</span></h1>
                    <h1 >Register</h1> <input className="checkbox" type="checkbox" onClick={() => setNewUser(!newUser)} id="" />

                    {
                        newUser && <div className="textbox">
                            <i class="fas fa-user"></i>
                            <input onBlur={handleInputField} name="name" type="text" placeholder="Name" required />
                        </div>
                    }

                    <div className="textbox">
                        <i class="fas fa-envelope"></i>
                        <input onBlur={handleInputField} name="email" type="text" placeholder="Email" required />
                    </div>
                    <div className="textbox">
                        <i className="fas fa-lock"></i>
                        <input onBlur={handleInputField} name="password" type="password" placeholder="Password" required />
                    </div>
                    {
                        newUser && <div className="textbox">
                            <i className="fas fa-lock"></i>
                            <input onBlur={handleInputField} name="confirm-password" type="password" placeholder="Confirm Password" required />
                        </div>
                    }
                    
                    {
                        newUser ? <button className="btn">Register</button> : <button className="btn">Log in</button>
                    }
                    <div onClick={handleGoogle} className="sign-in-media d-flex justify-content-center align-item-center">
                        <img src={Google} alt="" srcset="" />
                        <p className="mb-0 pt-2">Continue With Google</p>
                    </div>
                </div>
                <p style={{ color: 'red' }}>{user.error}</p>
                {
                   user.success && <p style={{ color: "green" }}>{newUser ? "Register" : "Sign In"} Successfully</p>
                }
            </form>
        </div>
    );
};

export default Login;