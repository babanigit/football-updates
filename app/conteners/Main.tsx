// this is for routing

import React from "react";
import Link from "next/link";

const Main = () => {
  return (
    <>
      <div className=" ">
        <ul>
        <li>
            <Link href="/pages/splash">splash</Link>
          </li>
          <li>
            <Link href="/pages/home">Home</Link>
          </li>
          <li>
            <Link href="/pages/about">About Us</Link>
          </li>
          <li>
            <Link href="/pages/contact">contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Main;
