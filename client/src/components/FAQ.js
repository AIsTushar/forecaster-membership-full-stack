import FaqAccordion from "./qna.js";

function FAQ() {
  return (
    <div className="flex py-16 px-4 lg:p-16 bg-[#1A1A1A] flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-1/2">
        <p className="font-semibold text-5xl lg:text-8xl leading-[110%] tracking-[-2%]">
          Frequently{" "}
          <span className="line-through decoration-1 text-gray-400 ">
            Asked
          </span>{" "}
          Forecasted Questions
        </p>
      </div>
      <div className="w-full lg:w-1/2 ">
        <FaqAccordion />
      </div>
    </div>
  );
}

export default FAQ;
