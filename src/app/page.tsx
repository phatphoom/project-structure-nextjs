import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="container mx-auto px-5 pt-5">
        <div className="flex justify-around">
          <Link href={"/login"} className="text-blue-600 hover:underline">
            login
          </Link>
          <Link href={"/register"} className="text-blue-600 hover:underline">
            register
          </Link>
        </div>
      </div>
    </>
  );
}
