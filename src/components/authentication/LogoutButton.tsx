"use client";

import { logout } from "@/app/actions/auth-actions";

const LogoutButton = () => {
  const handleLogout = async () => {
    await logout();
  };

  return (
    <span
      onClick={handleLogout}
      className="inline-block w-full cursor-pointer text-destructive"
    >
      Logout
    </span>
  );
};

export default LogoutButton;
