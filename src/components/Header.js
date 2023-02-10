import React, { useState } from 'react';

// Make the button disappear if the user is logged in

const Header = () => {
    const [showButton, setShowButton] = useState(false);

    const changeButtonvisibility = () => {
        setShowButton(!showButton);
        window.location.replace('http://localhost:3000/login');
    }

    return (
        <nav class="navbar bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <h1 class="text-light bg-dark">FlashCard</h1>
                <span class="navbar-text">
                    <scrpit>
                        <button type="button" class="btn btn-success" onClick={() => changeButtonvisibility()}>Log In</button>
                    </scrpit>
                </span>
            </div>
        </nav>

    );
};

export default Header;