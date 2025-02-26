import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LogoutButton: React.FC = () => {
  const { logout, isAuthenticated, user } = useAuth0();

  // Check if the logged-in user is the demo user
  const isDemoUser = user?.email === "demo@yourapp.com";

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

    // Optional: Clear any demo-specific data stored in local/session storage
    localStorage.clear();
    sessionStorage.clear();
  };

  if (isAuthenticated)
    return (
      <Button onClick={handleLogout}>
        {isDemoUser ? "Exit Demo" : "Log Out"}
      </Button>
    );

  return null;
};

export default LogoutButton;
