import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LogoutButton: React.FC = () => {
const { logout, isAuthenticated } = useAuth0();

const handleLogout = () => {
    logout({
    logoutParams: {
        returnTo: window.location.origin,
    },
    });
};

if(isAuthenticated) return (<Button onClick={handleLogout}>Log Out</Button>)
return null;
}

export default LogoutButton;


// button styling:
// style={{backgroundColor: "#284361"}}
// size="sm" className="px-5 btn btn-primary"