import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  // Regular login function
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

  // Auto-login as the demo user
//   const handleDemoLogin = async () => {
//     await loginWithRedirect({
//       appState: {
//         returnTo: "/dashboard",
//       },
//       authorizationParams: {
//         login_hint: "demo@yourapp.com",
//         prompt: "login",
//       },
//     });
//   };

  if (!isAuthenticated)
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          size="lg"
          className="px-5"
          style={{ backgroundColor: "#284361" }}
          onClick={handleLogin}
        >
          Log In
        </Button>
        {/* <Button
          size="lg"
          className="px-5 demoButton"
          style={{ backgroundColor: "#6c757d" }}
          onClick={handleDemoLogin}
        >
          Try Demo
        </Button> */}
      </div>
    );

  return null;
};

export default LoginButton;
