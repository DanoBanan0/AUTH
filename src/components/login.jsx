import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const [userName, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent page reload
        // Validate user input
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        // Check if user exists
        const matchedUser = existingUsers.find((user) => user.userName === userName && user.password === password);

        if (matchedUser) {
            localStorage.setItem('loggedInUser', userName);
            router.push('/');
        }
        else {
            alert("Username or passwordis incorrect");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" value={userName} onChange={(e) => setUsername(e.target.value)} required />
                <br /><br />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

