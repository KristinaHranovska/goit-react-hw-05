import "../../../node_modules/modern-normalize/modern-normalize.css";
import webGLFluidEnhanced from "webgl-fluid-enhanced";

import { useEffect, useRef } from "react";
import style from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import RouteSection from "../RouteSection/RouteSection";

const App = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    webGLFluidEnhanced.simulation(canvasRef.current, {
      SIM_RESOLUTION: 256,
      DENSITY_DISSIPATION: 0.8,
      PRESSURE_ITERATIONS: 30,
      COLOR_PALETTE: ["#61dafb", "#a8dadc", "#457b9d", "#1d3557", "#f1faee"],
    });
  }, []);

  return (
    <header className={style.thumb}>
      <canvas
        className={style.canvas}
        ref={canvasRef}
        style={{ width: "100vw", height: "100vh" }}
      />
      <Navigation />
      <RouteSection />
    </header>
  );
};

export default App;
