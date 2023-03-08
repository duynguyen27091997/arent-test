import React from "react";
import useUserStore from "src/stores/userStore";

interface Props {
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const info = useUserStore((state) => state.info);

  if (!info) {
    console.info("Not allow here, required login !");
    // Handle anonymous user ex: Redirect to login page or something else
  }

  return <>{children}</>;
};

export default ProtectedRoute;
