import Image from "next/image";
import React from "react";
import AuthImg from "@public/Abstract Curves and Colors.jpeg";
import Logo from "@/components/ui/Logo";
import AuthForm from "@/components/authentication/AuthForm";

const AuthenticationPage = () => {
  return (
    <>
      <div className="h-screen grid grid-cols-2 relative">
        <div className="relative w-full flex flex-col bg-muted p-10 text-primary-foreground">
          <div className="w-full h-[30%] bg-gradient-to-t from-transparent to-black/50 absolute top-0 left-0 z-10" />
          <div className="w-full h-[30%] bg-gradient-to-b from-transparent to-black/50 absolute bottom-0 left-0 z-10" />
          <Image
            src={AuthImg}
            fill
            alt="Login Image"
            className="w-full h-full object-cover z-0"
          />
          <div className="z-50">
            <Logo />
          </div>
          <div className="z-40 mt-auto">
            <blockquote>
              <p className="text-lg">
                &ldquo;Unleash creativity through AI - where imagination meets
                innovation, and every image tells a unique story.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center p-8 h-full">
          <div className="max-w-xl w-[350px] mx-auto">
            <AuthForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthenticationPage;
