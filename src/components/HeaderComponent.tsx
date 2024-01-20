import Link from "next/link";
import React from "react";

const HeaderComponent = () => {
  return (
    <header>
      <nav className="bg-neutral-300 text-black h-10 flex justify-between items-center p-2">
        <Link href={"/"}>Home</Link>
        <Link href={"/new-user"}>Create user</Link>

        <p className="text-purple-800 font-bold">NextJs</p>
      </nav>
    </header>
  );
};

export default HeaderComponent;
