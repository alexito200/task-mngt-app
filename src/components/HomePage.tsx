import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "../App.css";

const HomePage: React.FC = () => {
        return (

    <div className="w-75 card mb-3" id="container">
        <div className="row g-0 justify-content-end">
        <div className="col-md-4">
        <img
        src="/pattern.jpg"
                className="rounded-start"
                style={{ width: "400px", height: "600px" }}
                alt="image with pattern"
                />
                </div>
                <div className="col-md-8">
                <div className="card-body d-flex flex-column  align-items-center">
                <h1 className="card-title">Login</h1>
                <p className="card-text">
                Using Auth0
                </p>
                <div className="mt-3">
                <LoginButton />
                <LogoutButton />
                </div>
                </div>
                </div>
                </div>
                </div>
                
            );
            };
                export default HomePage;
                