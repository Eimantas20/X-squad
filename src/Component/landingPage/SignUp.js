import { useState, useEffect, useContext } from "react"
import './signup.css'
import { LoginContext } from "../UserContext";

const SignUp = () => {
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ , setLogged ] = useContext(LoginContext)
    
    const handleSignUp = (e) => {
        e.preventDefault();
        const newUser = {name, password}
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users))
        setLogged(true)
}
    return (
        <div>
            <form onSubmit={handleSignUp}>
            <h2>Sign up</h2>
                <label>Name</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)}></input>
                <label>Password</label>
                <input type="text" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default SignUp