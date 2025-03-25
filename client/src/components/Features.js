import Image from "next/image";

function Features() {
  return (
    <section id="features" className="w-full  py-8 px-4 sm:px-12 bg-[#1A1A1A]">
      <h2 className="text-4xl sm:text-[64px] mb-8 sm:mb-[64px]">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 w-full">
        {/* First Card */}
        <div className="relative col-span-1 sm:col-span-2 row-span-1 w-full h-[720px] sm:h-full rounded-lg overflow-hidden">
          <Image
            src="/female driver.jpg"
            alt="Forecaster Logo"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-6 left-6 flex flex-col gap-6 w-[80%]">
            <h3 className="w-2/3 text-4xl sm:text-[40px]  leading-[1.1] tracking[-0.02em]">
              Instant Shot Breakdown
            </h3>
            <p className="w-full font-normal text-lg sm:text-base leading-[1.5] lg:leading-[1.1] tracking[-2%]">
              AI-driven insights like “Wind at 12 mph, trajectory optimal for
              birdies.”
            </p>
          </div>
        </div>

        {/* Second and Third Cards Container */}
        <div className="grid grid-rows-1 lg:grid-rows-2 col-span-1 sm:col-span-3 gap-6">
          {/* Second Card */}
          <div className="relative w-full h-[720px] sm:h-[400px] rounded-lg overflow-hidden bg-black">
            <div className="w-full h-full relative overflow-hidden">
              <Image
                src="/Headphones.jpg"
                alt="Forecaster Logo"
                height={1524}
                width={1524}
                priority
                className="absolute object-cover bottom-40 scale-250 lg:scale-125 sm:left-52 sm:bottom-16"
              />
            </div>

            <div className="absolute top-6 sm:top-36 left-6 flex flex-col gap-6 w-[80%]">
              <h3 className="w-full sm:w-[346px] text-4xl sm:text-[40px] leading-[1.5] lg:leading-[1.1] tracking[-2%]">
                Real-time <br /> Audio Feedback
              </h3>
              <p className="w-full sm:w-[337px] h-[81px] text-lg sm:text-base leading-[1.5]">
                Live feedback through your Bluetooth earbuds, tailored to your
                preferred tone: supportive, neutral, or downright snarky.
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="flex relative flex-col-reverse sm:flex-row items-end gap-12 w-full h-[535px] lg:h-[400px] rounded-lg overflow-hidden bg-black pt-6 px-6 lg:px-12 lg:py-6">
            <div className="lg:w-[1080px] bottom-[-20] w-full h-3/4 sm:h-full relative">
              <Image
                src="/Mobile-mockup.png"
                layout="fill"
                alt="Forecaster Logo"
                objectFit="contain"
                className="scale-110"
              />
            </div>

            <div className="flex flex-col gap-6 w-full  sm:w-auto">
              <h3 className="text-4xl sm:text-[40px] leading-[1.5] lg:leading-[1.1] tracking[-2%]">
                Death By Data
              </h3>
              <p className="w-full h-[108px] text-lg sm:text-base leading-[150%]">
                Every swing, slice, and missed putt is stored in the app for
                review, so you can relive your worst shots whenever you want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
