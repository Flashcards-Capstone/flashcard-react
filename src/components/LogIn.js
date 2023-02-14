import { useState } from "react";
import React from "react";
import UserApi from "../apis/UserApi";
import { async } from "q";
import { Link } from "react-router-dom";

const LogIn = ({getUser}) => {
    
    const[ username, setUsername ] = useState("")
    const[ password, setPassword ] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        const userCredentials = {
            'username': username,
            'password': password
        }

        const token = UserApi.authenticateUser(userCredentials)

        const user = await UserApi.getUserByUsername(userCredentials.username)

        //const testUser = UserApi.getUserByUsername(userCredentials.username)
        getUser(user)
        
        window.location.replace('http://localhost:3000/user/' + user.id)

    }
    
    return (

        <div className="home">
            <div className="login-div">
                <form className="login-box" onSubmit={ handleSubmit }>
                    <div className="login-box-content">
                        <h3 className="login-box-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Username</label>
                            <input
                                type="username"
                                className="form-control mt-1"
                                placeholder="Enter username"
                                value={username}
                                onChange={ (event) => { setUsername(event.target.value) } }
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                value={password}
                                onChange={ (event) => { setPassword(event.target.value) } }
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;