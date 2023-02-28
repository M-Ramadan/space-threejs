import "./global.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Canvas } from "@react-three/fiber";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Canvas camera={{ position: [1, 1.5, -10], fov: 50 }}>
      <App />
    </Canvas>
  </React.StrictMode>
);