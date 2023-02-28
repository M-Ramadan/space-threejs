import "./global.scss";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <Canvas camera={{ position: [1, 1.5, -10], fov: 50 }} allowScrolling>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </Canvas>
      <Loader />
    </React.StrictMode>
  </>
);
