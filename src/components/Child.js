import React from "react";

const Child = ({setIsLoggedIn}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }
    return(
        <div className="child">
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" />
                <br />
                <br />
                <label>Password:</label>
                <input type="password" />
                <br />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Child;