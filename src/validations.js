const usernameValidation = (username) => {
    if(!username) {
        return 'Username is required';
    }
    if(username.trim().length < 2) {
        return 'Username must be at least 3 characters';
    }
    if(username.trim().length > 13) {
        return 'Username must be shorter than 13 characters';
    }
    const pattern = /[a-zA-Z0-9._]/;
    if(!pattern.test(username)) {
        return "Invalid username";
    }
    if (username.startsWith('.') || username.startsWith('_')) {
        return "Username cannot start with a dot or underscore.";
    }
    if (username.endsWith('.') || username.endsWith('_')) {
        return "Username cannot end with a dot or underscore.";
    }
    return true;
}

const passwordValidation = (password) => {
    if(!password) {
        return 'Password is required';
    }
    if(password.length < 6) {
        return 'Password must be at least 6 characters';
    }
    if(password.length > 20) {
        return 'Password must be shorter than 20 characters';
    }
    const pattern = /[a-zA-Z0-9_]/;
    if(!pattern.test(password)) {
        return "Invalid password. Include only letters, numbers, and/or underscore.";
    }
    return true;
}

const emailValidation = (email) => {
    if(!email) {
        return 'Email is required';
    }
    if(email.trim().length < 6) {
        return 'Email must be at least 6 characters';
    }
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!pattern.test(email)) {
        return 'Invalid email address';
    }
    return true;
}


export default {usernameValidation, passwordValidation, emailValidation};