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
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = `${window.location.origin}/callback`; // Auto-adjust URL for environments

  const onRedirectCallback = (appState: AppState | undefined) => {
    navigate(appState?.returnTo || "/dashboard"); // Redirect to dashboard instead of pathname
  };

  if (!domain || !clientId) {
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
