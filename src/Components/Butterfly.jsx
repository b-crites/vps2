import React from 'react';

const ButterflyAnimation = () => {
  return (
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      {/* Define a butterfly shape */}
      <path id="butterfly" d="M50 0 C0 0 30 30 50 50 C70 70 100 0 50 0" fill="#FFD700" />

      {/* Use a motion path for butterfly's flight pattern */}
      <path id="motionPath" d="M100 100 Q 50 200 100 300" fill="transparent" />

      {/* Animate the butterfly along the motion path */}
      <animateMotion repeatCount="indefinite" dur="4s">
        <mpath href="#motionPath" />
      </animateMotion>

      {/* Duplicate butterflies along the path */}
      <use href="#butterfly">
        <animateMotion repeatCount="indefinite" dur="4s" begin="0s" />
      </use>
      <use href="#butterfly">
        <animateMotion repeatCount="indefinite" dur="4s" begin="1s" />
      </use>
      <use href="#butterfly">
        <animateMotion repeatCount="indefinite" dur="4s" begin="2s" />
      </use>
    </svg>
  );
};

export default ButterflyAnimation;
