import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";

const VantaCells = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CELLS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          color1: 0x0165fc, // blue
          color2: 0x0165fc, // same blue
          size: 1.5,
          speed: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="w-full h-screen flex items-center justify-center   "
    >
    </div>
  );
};

export default VantaCells;
