import Image from "next/image";

function Explanation() {
  return (
    <div className="lg:p-16 w-full text-white">
      <div className="flex flex-col lg:flex-row items-start gap-6 px-2 lg:gap-16 border-t max-w-[1312px] pt-6 pb-12">
        <div className="w-[275px]">
          <p class=" text-4xl text-white">Meet Forecaster.</p>
        </div>
        <Image
          src="GolfBall.svg"
          alt="Forecaster Logo"
          width={48}
          height={48}
        />
        <div className="w-[358px] lg:w-[867px]">
          <p className="text-2xl lg:text-4xl leading-[130%] tracking-[0%]">
            The smart golf ball that delivers real-time audio feedback to your
            Bluetooth earbuds and saves every swing’s data in the app for future
            analysis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Explanation;
