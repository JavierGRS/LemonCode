import React from "react";
import mystyle2 from "./mystyles2.scss"

export const HelloWorldComponent = () => {
  return (
    <>
        {/* {console.log(`Api base: ${process.env.API_BASE}`)} */}
        <h1 className={mystyle2.greyBackground}>Hello World from React DOM styled with SASS</h1>
    </>
  );
};