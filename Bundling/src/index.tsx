import "./mystyles.scss"
import logoImg from "./content/logo_1.png"
import React from "react";
import { createRoot } from "react-dom/client";
import { HelloWorldComponent} from "./HelloWorldComponent"

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HelloWorldComponent></HelloWorldComponent>
  </div>
);