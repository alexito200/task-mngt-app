import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import "../App.css";

const HomePage: React.FC = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const isDemoUser = user?.email === "demo@yourapp.com";

  const [textToCopy] = useState("DemoPassword123!"); // Demo password
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [showDemoModal, setShowDemoModal] = useState(false); // Controls main demo modal
  const [showPasswordModal, setShowPasswordModal] = useState(false); // Controls password modal
  const [passwordCopied, setPasswordCopied] = useState(false); // Tracks if the password has been copied
  const [copied, setCopied] = useState(false);

  // Function to copy the demo password
  const handleCopy = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      navigator.clipboard.writeText(textAreaRef.current.value);
      setCopied(true);
      setPasswordCopied(true); // Enables Step 2 after clicking Copy
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Function to handle demo login
  const handleDemoLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/dashboard",
      },
      authorizationParams: {
        login_hint: "demo@yourapp.com", // Prefills the email field in Auth0
        prompt: "login",
      },
    });
  };

  return (
    <div className="w-75 card mb-3" id="homeContainer">
      <div className="row g-0 justify-content-end">
        <div className="col-md-6 imgContainer">
          <img
            src="/pattern.jpg"
            className="rounded-start"
            style={{ width: "600px", height: "600px" }}
            alt="image with pattern"
          />
        </div>

        <div className="col-md-6">
          <div className="card-body d-flex flex-column align-items-center">
            <h1 className="card-title">Welcome</h1>
            <p className="card-text">
              {isAuthenticated
                ? isDemoUser
                  ? "You are logged in as a Demo User."
                  : "You are logged in using Auth0."
                : "Please log in to continue."}
            </p>

            <div className="mt-3">
              {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
            </div>

            {/* New Button to Open Demo Modal */}
            <button
              className="btn btn-success mt-4 px-4 py-2"
              onClick={() => setShowDemoModal(true)}
            >
              Demo Login
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Demo Steps */}
      <Modal show={showDemoModal} onHide={() => setShowDemoModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Demo Access</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          {/* <p className="text-center">
            Follow the steps below to access the demo account.
          </p> */}

          {/* Step 1: Reveal Password */}
          <button
            className="btn btn-warning mb-3"
            onClick={() => setShowPasswordModal(true)}
          >
            Step 1: Copy Demo Password
          </button>

          {/* Step 2: Log in as Demo User */}
          <button
            className="btn btn-primary"
            disabled={!passwordCopied} // Only enabled if password was copied
            onClick={handleDemoLogin} // Calls the login function
          >
            Step 2: Click For Demo Log In
          </button>
        </Modal.Body>
      </Modal>

      {/* Modal for Copying Password */}
      <Modal
        show={showPasswordModal}
        onHide={() => setShowPasswordModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Copy Demo Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            ref={textAreaRef}
            value={textToCopy}
            readOnly
            className="form-control"
            rows={1}
          />

          {/* "Copied" Indicator */}
          {copied && (
            <div
              className="mt-2 p-2 text-white rounded"
              style={{
                backgroundColor: "rgba(50, 205, 50, 0.8)",
                textAlign: "center",
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              Copied!
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPasswordModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCopy}>
            Copy Password
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HomePage;
