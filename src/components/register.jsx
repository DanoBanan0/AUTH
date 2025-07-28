import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
    const router = useRouter();
    const [userName, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] =useState();

    const handleRegister = (e) => {
        e.preventDefault(); // Dontm reload the page

        // Validate user input
        const existingUsers = JSON.parse(localStorage.getItem('users'))  || [];
        const userExists = existingUsers.find((user) => user.userName === userName);

        if(userExists) {
            alert("El usurario '${userName}' ya existe");
            return;
        }

        // Create new user object
        const newUsers = [...existingUsers, {userName, password, email}];
        localStorage.setItem('users',JSON.stringify(newUsers));

        alert("Usuario Registrado exitosamente!");
        router.push('/login'); // Redirect to login page
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Username" value={userName} onChange={(e) => setUsername(e.target.value)} required />
                <br /><br />
                <input type="passwords" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br /><br />
                <input type="email" placeholder="usuario@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </form>
        </div>
    );
}