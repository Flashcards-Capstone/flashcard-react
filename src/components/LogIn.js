import React from "react";

const LogIn = () => {
    return (
        // <div className="home">
        //     <form className="home-text">
        //         <div class="mb-3">
        //             <label for="exampleInputEmail1" class="form-label">Email address</label>
        //             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        //         </div>
                
        //         <div class="mb-3">
        //             <label for="exampleInputPassword1" class="form-label">Password</label>
        //             <input type="password" class="form-control" id="exampleInputPassword1"/>
        //         </div>
                
        //         <button type="submit" class="btn btn-primary">Submit</button>
        //     </form>
        // </div>
        <div className="home">
            <div className="login-div">
                <form className="login-box">
                    <div className="login-box-content">
                        <h3 className="login-box-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="username"
                                className="form-control mt-1"
                                placeholder="Enter username"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
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