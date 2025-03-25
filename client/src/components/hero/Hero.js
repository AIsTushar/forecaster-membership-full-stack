import Image from "next/image";
import Frame from "./Frame";
import CTA from "./CTA";

function Hero() {
  return (
    <div className="flex flex-col-reverse px-24 lg:py-24 lg:flex-row items-center justify-center text-white">
      <div className="flex flex-col p-6 w-screen pb-24 lg:w-[641px] lg:h-[640px] gap-[80px]">
        <h1 className="w-full h-full lg:w-[641px] lg:h-[318px] font-semibold text-left text-5xl lg:text-8xl leading-[110%] tracking-[-2%]">
          Real-time golf analysis from the future
        </h1>

        <Frame />
        <CTA />
      </div>
      <div className="relative w-[358px] h-[354px] lg:w-[641px] lg:h-[640px] gap-[80px]">
        <Image
          src="/Heroimage.png"
          alt="Forecaster Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  );
}

export default Hero;
