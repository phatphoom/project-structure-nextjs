import React from "react";
import Link from "next/link";
import LoginImage from "@/components/LoginImage";
import LoginForm from "@/components/LoginForm";
function page() {
  return (
    <div>
      <h2>Login</h2>

      <div className="flex items-center justify-center min-h-screen">
        <LoginImage />
        <LoginForm />
      </div>
    </div>
  );
}

export default page;
