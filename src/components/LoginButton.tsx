import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton: React.FC = () => {
const { loginWithRedirect, isAuthenticated } = useAuth0();

const handleLogin = async () => {
    await loginWithRedirect({
    appState: {
        returnTo: "/dashboard",
    },
    authorizationParams: {
        prompt: "login",
    },
    });
};

if(!isAuthenticated) return (<Button size="lg" className="px-5" style={{backgroundColor: "#284361"}} onClick={handleLogin}>Log In</Button>)
return null;
};

export default LoginButton;