import {
  CustomAccordion,
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "./ui/accordion";

const Question = ({ question, answer }) => {
  return (
    <div className="bg-black px-2 lg:px-6 rounded-md">
      <CustomAccordion type="single" collapsible className="w-full">
        <CustomAccordionItem value="item-1">
          <CustomAccordionTrigger className="lg:text-[24px] px-2 text-start text-lg">
            {question}
          </CustomAccordionTrigger>
          <CustomAccordionContent>{answer}</CustomAccordionContent>
        </CustomAccordionItem>
      </CustomAccordion>
    </div>
  );
};

function FaqAccordion() {
  return (
    <section
      id="faq"
      className="w-full max-w-3xl mx-auto p-4  text-white rounded-lg flex flex-col gap-6"
    >
      <Question
        question="What happens if my ball gets destroyed?"
        answer="We'll mourn its loss and send you a replacement for only $500
              (plus shipping and handling)."
      />
      <Question
        question="Does this work for left-handed players?"
        answer="Yes, our product is designed to work equally well for both
              right-handed and left-handed players."
      />

      <Question
        question=" Can Forecaster fix my swing?"
        answer=" While our product provides valuable insights about your swing,
              it's a tool to help identify issues rather than automatically
              fix them. Use the data with proper coaching for best results."
      />

      <Question
        question="Does the ball work without Bluetooth?"
        answer="No, Bluetooth connectivity is required for the ball to transmit
              data to the companion app where all analysis happens."
      />

      <Question
        question="Is this real?"
        answer="Yes, our product is a real performance-tracking device designed to
              help improve your game."
      />
    </section>
  );
}

export default FaqAccordion;
