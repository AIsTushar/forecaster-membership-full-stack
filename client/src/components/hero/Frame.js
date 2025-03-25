import Image from "next/image";

const Star = () => {
  return (
    <Image
      src="/Star.png"
      alt="Star"
      width={60}
      height={60}
      className="-mr-6"
    />
  );
};

function Frame() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex ">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p className="text-[18px] tracking-[-1%] leading-[100%] text-lg font-normal">
        “Now I’m hitting birdies instead of branches.”
      </p>
      <div className="flex gap-4">
        <Image
          src="/Tiger-Forests.png"
          alt="Tiger Forests Logo"
          width={24}
          height={24}
        />
        <span className="text-sm">Tiger Forests, USA</span>
      </div>
    </div>
  );
}

export default Frame;
