import React from "react";
import mystyle2 from "./mystyles2.scss"
import mystyle1 from "./mystyles.scss"

export const HelloWorldComponent = () => {
  return (
    <>
        {/* {console.log(`Api base: ${process.env.API_BASE}`)} */}
        <h1 className={mystyle1.redBackground}>Hello World from React DOM styled with SASS</h1>
        <h1 className={mystyle2.greyBackground}>Hello World from React DOM styled with SASS</h1>
    </>
  );
};