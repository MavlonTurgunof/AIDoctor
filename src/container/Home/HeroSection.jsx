import React, { useState } from "react";
import Container from "../../components/Container";
import Lottie from "lottie-react";
import robotAnimation from "../../assets/BOTAni.json";
import chattingAnimation from "../../assets/Chatting.json";

function HeroSection() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
  };

  return (
    <div className="bg-[url(/banner.svg)] w-full h-auto bg-cover bg-no-repeat">
      <Container>
        <div className="flex flex-col items-center">
          <div className="pt-[150px] text-white text-center">
            <h1 className="text-[74px] font-bold ">
              Find the Right Care-Guided by Smart Technology
            </h1>
            <p className="text-[20px] font-normal">
              Your AI health assistant connects you with the right doctor or
              clinic — instantly, reliably, and personally.
            </p>
          </div>
          <div className="relative h-[470px] w-[50%] bg-center bg-cover bg-no-repeat flex flex-col justify-between gap-3">
            {/* <Lottie
              animationData={robotAnimation}
              loop
              autoplay
              className={`absolute inset-0 w-full h-full z-0 transition-all duration-1500 ${
                messages.length !== 0 ? "rotate-45 left-90" : ""
              }`}
            /> */}
            <Lottie
              animationData={robotAnimation}
              loop
              autoplay
              className={`absolute inset-0 w-full h-full z-0 transition-all duration-1500 ${
                messages.length !== 0 ? "hidden" : ""
              }`}
            />

            <Lottie
              animationData={chattingAnimation}
              loop
              autoplay
              className={`absolute inset-0 w-full h-full z-0 left-130 transition-all duration-1500 ${
                messages.length !== 0 ? "" : "hidden"
              }`}
            />

            <div
              className={`w-full bg-[#0E91A5]/40 backdrop-blur-md h-[100%] mt-10 rounded-2xl border-2 border-[#0E91A5] transition-all duration-300 ${
                messages.length === 0 ? "invisible" : ""
              }`}
            >
              <div className="p-3">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={` mb-2 p-2 rounded-lg max-w-[50%] ${
                      msg.role === "user"
                        ? "bg-black text-white self-end ml-auto"
                        : "bg-[#0E91A5] text-white self-start mr-auto"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-4 items-center  bg-[#0E91A5]/20 backdrop-blur-md px-2 pt-2 pb-8 rounded-t-2xl">
              <input
                type="text"
                placeholder="Try it out!"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                className="py-2 px-4 w-full text-white bg-black   outline-none border-3 border-[#0E91A5] focus:border-3 focus:shadow-md focus:shadow-[#0E91A5] focus:border-[#0E91A5]/90 rounded-full "
              />
              <button
                onClick={handleSubmit}
                className=" bg-[#0E91A5] px-2 py-3 rounded-full text-white font-bold whitespace-nowrap"
              >
                Find Doctor
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
