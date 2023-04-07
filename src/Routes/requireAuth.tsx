import { AuthContext } from "@/contexts/AuthContext";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

function requireAuth(WrappedComponent: any) {
  function RequireAuth(props: any) {

    const { isLoggedIn } = useContext(AuthContext);// check if user is authenticated

    if (isLoggedIn) {
      return <WrappedComponent {...props} />;
    }

    return <Navigate to="/login" />;
  }

  return RequireAuth;
}

export default requireAuth;
