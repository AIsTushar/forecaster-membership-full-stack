import Image from "next/image";

function Footer() {
  return (
    <div className="py-16 px-4 relative lg:px-16 flex flex-col gap-10 overflow-hidden">
      <div className="absolute lg:hidden w-[362px] h-[195px] bottom-[-120px] left-1/2 transform -translate-x-1/2 bg-[rgba(40,153,68,1)] opacity-50 blur-3xl rotate-[7.18deg] rounded-full" />

      <div className="flex items-center gap-3.5 lg:gap-12">
        <div className="relative w-[70px] h-[70px] lg:w-[256px] lg:h-[256px]">
          <Image src="/logo icon.svg" alt="Logo" fill />
        </div>
        <p className="text-6xl lg:text-[204px]">Forecaster</p>
      </div>

      <div className="p-4 rounded-md bg-white/15 flex justify-between">
        <div className="flex gap-6 opacity-[90%]">
          <Image src="/instagram.svg" alt="Instragram" width={24} height={24} />
          <Image src="/x.svg" alt="Instragram" width={24} height={24} />
          <Image src="/youtube.svg" alt="Instragram" width={24} height={24} />
        </div>
        <p className="leading-[130%] tracking-[1%] opacity-[89%]">
          © 2025 Flux Academy
        </p>
      </div>
    </div>
  );
}

export default Footer;
