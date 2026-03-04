import React from "react";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";

const Banner = ({progress,resolved}) => (
  <div className="w-11/12 mx-auto my-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* In Progress */}
      <div
        className="relative rounded-2xl h-56 md:h-64 flex items-center justify-center text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #7c3aed 0%, #6d6bc9 100%)" }}
      >
        <img src={vector2} alt=""
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none" />
        {/* LEFT side - flipped */}
        <img src={vector1} alt=""
          className="absolute left-0 top-0 h-full pointer-events-none select-none"
          style={{ width: "auto", maxWidth: "45%", transform: "scaleX(-1)" }} />
        {/* RIGHT side */}
        <img src={vector1} alt=""
          className="absolute right-0 top-0 h-full pointer-events-none select-none"
          style={{ width: "auto", maxWidth: "45%" }} />
        <div className="relative z-10 text-center">
          <h2 className="text-lg md:text-2xl font-medium mb-3">In-Progress</h2>
          <p className="text-5xl font-bold">{progress}</p>
        </div>
      </div>

      {/* Resolved */}
      <div
        className="relative rounded-2xl h-56 md:h-64 flex items-center justify-center text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #34d399 0%, #0d9488 100%)" }}
      >
        <img src={vector2} alt=""
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none" />
        {/* LEFT side - flipped */}
        <img src={vector1} alt=""
          className="absolute left-0 top-0 h-full pointer-events-none select-none"
          style={{ width: "auto", maxWidth: "45%", transform: "scaleX(-1)" }} />
        {/* RIGHT side */}
        <img src={vector1} alt=""
          className="absolute right-0 top-0 h-full pointer-events-none select-none"
          style={{ width: "auto", maxWidth: "45%" }} />
        <div className="relative z-10 text-center">
          <h2 className="text-lg md:text-2xl font-medium mb-3">Resolved</h2>
          <p className="text-5xl font-bold">{resolved}</p>
        </div>
      </div>

    </div>
  </div>
);

export default Banner;