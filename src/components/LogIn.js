import { useState } from "react";
import React from "react";
import UserApi from "../apis/UserApi";

const LogIn = () => {
    
    const[ username, setUsername ] = useState("")
    const[ password, setPassword ] = useState("")
    const[ user, setUser ] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const userCredentials = {
            'username': username,
            'password': password
        }

        const token = UserApi.authenticateUser(userCredentials)

        //const testUser = UserApi.getUserByUsername(userCredentials.username)
        console.log("AAAAAAAAAAAAAAAAAAA", token)
       // setUser(testUser)
        
        // window.location.replace('http://localhost:8080/api/user/' + user.username)

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