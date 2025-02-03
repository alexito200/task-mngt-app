import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Auth0ProviderWithNavigateProps = {
children: React.ReactNode;
};

type AppState = {
    returnTo?: string;
};

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({
children,
}) => {
const navigate = useNavigate();
const domain = "dev-4515pnimc1tuvixu.us.auth0.com";
const clientId = "qnMEv6Qhhhv7GVzR2hIO98CjeE69fe3W" ;
const redirectUri = "http://localhost:5173/callback";

const onRedirectCallback = (appState: AppState | undefined) => {
    navigate(appState?.returnTo || window.location.pathname);
};

if (!domain || !clientId || !redirectUri) {
    console.error("Auth0 configuration is missing!");
    return null;
}

return (
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
        redirect_uri: redirectUri,
        scope: "openid profile email",
    }}
    onRedirectCallback={onRedirectCallback}
    cacheLocation="localstorage"
    >
    {children}
    </Auth0Provider>
);
};

export default Auth0ProviderWithNavigate;