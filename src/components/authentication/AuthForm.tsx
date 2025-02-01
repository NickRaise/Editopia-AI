"use client";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Button } from "../ui/button";
import ResetPassword from "./ResetPassword";

const AuthForm = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {mode === "reset"
            ? "Reset Password"
            : mode === "login"
            ? "Login"
            : "Signup"}
        </h1>
        <p className="text-sm text-muted-foreground">
          {mode === "reset"
            ? "Enter your email below to reset your password"
            : mode === "login"
            ? "Enter your email below to login to your account"
            : "Enter your infomartion below to create an account"}
        </p>
      </div>
      {mode === "login" && (
        <>
          <LoginForm />
          <div className="flex justify-between items-center">
            <Button
              className="p-0"
              variant="link"
              onClick={() => setMode("signup")}
            >
              Need an account? Sign up
            </Button>
            <Button
              className="p-0"
              variant="link"
              onClick={() => setMode("reset")}
            >
              Forgot password?
            </Button>
          </div>
        </>
      )}
      {mode === "signup" && (
        <>
          <LoginForm />
          <div className="text-center">
            <Button
              className="p-0"
              variant="link"
              onClick={() => setMode("login")}
            >
              Already have an account? Login
            </Button>
          </div>
        </>
      )}
      {mode === "reset" && (
        <>
          <ResetPassword />
          <div className="text-center">
            <Button
              className="p-0"
              variant="link"
              onClick={() => setMode("login")}
            >
              Back to login
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthForm;
