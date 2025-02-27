import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from "./Authentication";
import TaskContextProvider from "./context/TaskProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <TaskContextProvider>
          <App />
        </TaskContextProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </StrictMode>
);
