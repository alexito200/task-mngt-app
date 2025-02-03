import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "../App.css";

const HomePage: React.FC = () => {
        return (

    <div className="w-75 card mb-3" id="container">
        <div className="row g-0 justify-content-end">
        <div className="col-md-4">
        <img
        src="./public/pattern.jpg"
                className="rounded-start"
                style={{ width: "400px", height: "600px" }}
                alt="image with pattern"
                />
                </div>
                <div className="col-md-8">
                <div className="card-body d-flex flex-column  align-items-center">
                <h1 className="card-title">Create Account</h1>
                <p className="card-text">
                Log in or Sign up
                </p>
                <div className=" mt-5 mb-3 w-75">
                <input
                type="text"
                className="form-control"
                placeholder="Name"
                />
                </div>
                <div className="mb-3 w-75">
                <input
                type="email"
                className="form-control"
                placeholder="Email"
                />
                </div>
                <div className="mb-5 w-75">
                <input
                type="password"
                className="form-control"
                placeholder="Password"
                />
                </div>
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
                