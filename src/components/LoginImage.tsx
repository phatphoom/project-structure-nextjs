import React from "react";
import Image from "next/image";

function LoginImage() {
  return (
    <>
      <Image
        src={"/welcome.png"}
        width={400}
        height={400}
        alt="Picture of the author"
      />
    </>
  );
}

export default LoginImage;
