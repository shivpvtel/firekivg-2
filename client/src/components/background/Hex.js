import React, { useEffect } from "react";
import "./Hex.css";
import { hexlogo } from "./hexagon.png";

const Hexagon = () => {
  useEffect(() => {
    let mousePosition = { x: 0, y: 0 };
    document.addEventListener("mousemove", (mouse) => {
      mousePosition = { x: mouse.clientX, y: mouse.clientY };
    });

    const loop = () => {
      const gradientElement = document.getElementById("gradient");
      if (gradientElement) {
        gradientElement.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
      }
      window.requestAnimationFrame(loop);
    };
    window.requestAnimationFrame(loop);

    const patternElement = document.getElementById("pattern");
    if (patternElement) {
      const countY = Math.ceil(patternElement.clientHeight / 40) + 1;
      const countX = Math.ceil(patternElement.clientWidth / 48) + 1;
      for (let i = 0; i < countY; i++) {
        for (let j = 0; j < countX; j++) {
          const hexagon = document.createElement("div");
          hexagon.style = `
            background: #2B22;
            width: 44px;
            height: 50px;
            background-size: contain;
            position: absolute;
            top: ${i * 40}px;
            left: ${j * 48 + ((i * 24) % 48)}px;
          `;
          patternElement.appendChild(hexagon);
        }
      }
    }
  }, []);

  return (
    <>
      <h1>Hexagons</h1>
      <div id="pattern"></div>
      <div id="gradient"></div>
    </>
  );
};

export default Hexagon;
