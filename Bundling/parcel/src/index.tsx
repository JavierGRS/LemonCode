import "./mystyles.scss";
import logoImg from "./content/logo_1.png";

const user = "Manolo Dorado";

console.log(`Hello ${user}!`);

const img = document.createElement("img");
img.src = logoImg;
img.alt = "Logo Lemoncode";

document.querySelector("#imgContainer").appendChild(img);

const numberA: number = 2;
const numberB: number = 3;

console.log(numberA + numberB);

import React from "react";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello";
import { ByeComponent } from "./bye";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HelloComponent />
    <ByeComponent />
  </div>
);
