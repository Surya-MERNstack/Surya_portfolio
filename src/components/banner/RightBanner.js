import React from 'react'
import { surya } from '../../assets/index';
const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[180px] h-[180px] lgl:w-[410px] lgl:h-[470px] z-10"
        src={surya}
        alt="bannerImg"
      />
      <div className="absolute bottom-6rem w-[350px] h-[250px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner