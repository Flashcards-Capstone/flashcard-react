import React from 'react';

// Make the button disappear if the user is loggen in

const Header = () => {
    return (
        <nav class="navbar bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <h1 class="text-light bg-dark">FlashCard</h1>
                <span class="navbar-text">
                    <button type="button" class="btn btn-success">Log In</button>
                </span>
            </div>
        </nav>

    );
};

export default Header;