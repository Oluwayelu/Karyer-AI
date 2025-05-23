import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image
        src={"/logo-icon.png"}
        alt="Karyer AI Logo"
        width={60}
        height={60}
        className="h-12 py-1 w-auto object-cover object-center rounded-2xl "
      />
      <p className="text-light-primary font-semibold">Karyer AI</p>
    </>
  );
};

export default Logo;
