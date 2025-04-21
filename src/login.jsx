import { useState } from "react";
import validations from "./validations.js";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [usernameError, setUsernameError] = useState("");

    const handleLogin = () => {
        const usernameResult = validations.usernameValidation(username);
        const emailResult = validations.emailValidation(email);
        const passwordResult = validations.passwordValidation(password);

        setUsernameError(usernameResult === true ? "" : usernameResult);
        setEmailError(emailResult === true ? "" : emailResult);
        setPasswordError(passwordResult === true ? "" : passwordResult);

        if (usernameResult === true && emailResult === true && passwordResult === true) {
            console.log("Login successful!");
        }
    };

    return (
        <div className="login">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error">{emailError}</p>}

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && <p className="error">{usernameError}</p>}

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error">{passwordError}</p>}

            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
