"use client";

import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51R6SJ7SAbk4HDuH1CA3fSOxxE27kokqHTYfxh2aBSZXPqM0WRAZVMYIlplDpvw2zVzqITLWsEroIIKB9vGFVEMtj00W6lnGSFd"
);

function Card({ title, price, featureOne, featureTwo, btnText, priceId }) {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/checkout",
        { priceId, title },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.data.sessionId) {
        const { sessionId } = response.data;
        stripe.redirectToCheckout({ sessionId });
      } else {
        console.error("No sessionId received from server");
      }
    } catch (error) {
      console.error("Error during checkout:", error.message);
    }
  };

  return (
    <div class="w-[350px] lg:w-[420px] h-auto py-6 px-6 rounded-md border border-white/10 bg-black shadow-[0px_0px_100px_0px_rgba(40,153,68,0.25)]">
      <div className="border-b-[1px] border-white/10">
        <p className="text-3xl text-center font-normal uppercase py-6 leading-[100%]">
          {title}
        </p>
      </div>
      <div className="border-b-[1px] border-white/10">
        {price === "free" ? (
          <p className="text-2xl uppercase font-semibold text-center py-6 leading-[100%]">
            {price}
          </p>
        ) : (
          <div className="flex justify-center items-center gap-1 py-6">
            <p className="text-2xl uppercase font-semibold leading-[100%]">
              {price}
            </p>
            <span className="leading-[150%] font-normal">/month</span>
          </div>
        )}
      </div>
      <div className="border-b-[1px] border-white/10">
        <p className="font-normal py-6 leading-[150%] text-center">
          {featureOne}
        </p>
      </div>
      <div className="border-b-[1px] border-white/10">
        <p className="font-normal py-6 leading-[150%] text-center">
          {featureTwo}
        </p>
      </div>
      <div className="py-6 flex justify-center">
        <button
          onClick={handleCheckout}
          className="bg-gradient-to-r cursor-pointer flex gap-4 py-4 pl-8 pr-5 rounded-full from-[rgba(13,51,23,0.9)] to-[rgba(40,153,68,0.9)] border border-[#289944] shadow-[0px_0px_90px_0px_#289944B2]"
        >
          {btnText}
          <Image src="/GolfBall.svg" alt="Golf Ball" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

export default Card;
