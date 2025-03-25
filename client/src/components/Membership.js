import Card from "./Card";

function Membership() {
  return (
    <section
      id="membership"
      className="py-32 px-6 flex flex-col gap-16 items-center overflow-hidden"
    >
      <h2 className="bg-gradient-to-b from-white to-[#999999] text-transparent bg-clip-text text-[50px] lg:text-[64px] font-semibold leading-[100%] tracking-[-1%]">
        Membership
      </h2>
      <p className="h-20 w-[358px] lg:h-[72px] lg:w-[716px] text-center text-xl leading-[150%] font-medium text-white">
        If a $500 golf ball isn’t enough, you can improve our margins further by
        kindly providing us with recurring revenue.
      </p>
      <div className="flex relative flex-col lg:flex-row gap-6">
        <div className="absolute -z-20 w-[400px] h-[400px] bottom-[35%] lg:bottom-0 left-1/2 transform -translate-x-1/2 bg-[rgba(40,153,68,1)] opacity-80 blur-3xl rotate-[7.18deg] rounded-full" />
        <Card
          btnText="Get Basic"
          title="basic"
          price="free"
          featureOne="“Evil” mode only"
          featureTwo="No saved data"
          priceId="price_1R6To3SAbk4HDuH1zj4PqiH9"
        />
        <Card
          btnText="Get Pro"
          title="pro"
          price="$19"
          featureOne="“Evil” and “Coach” modes"
          featureTwo="Basic analytics"
          priceId="price_1R6T5nSAbk4HDuH1COBIUlXO"
        />
        <Card
          btnText="Get Premium"
          title="premium"
          price="$39"
          featureOne="All feedback modes"
          featureTwo="Advanced analytics"
          priceId="price_1R6T70SAbk4HDuH1lQ3iZmhm"
        />
      </div>

      <p className="leading-[150%] tracking-[1%] text-white text-center">
        *Plans and prices are subject to change based on the whims of our CFO.
      </p>
    </section>
  );
}

export default Membership;
