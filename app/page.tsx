// will add theme here

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "./components/Navbar";

// import Main from "./conteners/Main"
export default function Home() {


  const history = useRouter();
  let [loading, setLoading] = useState(false);
  // let [color, setColor] = useState("#ffffff");
  setTimeout(() => setLoading(true), 2000);

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className=" h-screen w-screen bg-yellow-300 place-items-center ">s
          {loading ? (
            <>{history.push("/pages/home", { scroll: false })}</>
          ) : (
            <>
              <div
                // style={{background:theme.body}}
                className="  flex justify-center items-center h-screen w-screen"
              >
                {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input
          value={color}
          onChange={(input) => setColor(input.target.value)}
          placeholder="Color of the loader"
        /> */}
                <div className=" text-2xl" >loading...</div>
                {/* <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> */}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
