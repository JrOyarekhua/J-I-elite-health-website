import React from "react";

const HeroBackground = () => {
  return (<div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute right-0 top-0 w-2/3 h-full bg-[#1A202C]" style={{clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'}}></div>
 </div>
);
};

export default HeroBackground;
