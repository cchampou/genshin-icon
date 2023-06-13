import React from "react";
import {createRoot} from "react-dom/client";
import {Anemo, Hydro, Pyro, Dendro, Electro, Cryo, Geo } from "genshin-icon";

const App = () => <section>
  <h1>Genshin Icon</h1>
  <Anemo size="100" color="black"/>
  <Hydro size="100" color="black"/>
  <Pyro size="100" color="black"/>
  <Electro size="100" color="black"/>
  <Cryo size="100" color="black"/>
  <Geo size="100" color="black"/>
  <Dendro size="100" color="black"/>
</section>;


createRoot(document.getElementById("root")!).render(<App />);
