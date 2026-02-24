"use client";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#0F0F0F] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 py-32 md:py-40 lg:py-48 text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-[#999999] mb-8 font-medium">
          통합상해보험
        </p>

        <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[1.2] tracking-tight text-white mb-8">
          넘어지는 건 1초,<br />치료비는 1년치 월급.
        </h1>

        <p className="text-lg md:text-xl text-[#999999] mb-3 font-light">
          골절 한 번 평균 치료비
        </p>
        <p className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
          800<span className="text-[#2563EB]">만원</span>
        </p>

        <button
          onClick={scrollToForm}
          className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-base px-10 py-4 rounded-full transition-all duration-300 cursor-pointer"
        >
          무료 보장 진단 받기
        </button>

        <p className="text-sm text-[#666666] mt-6">
          강제 가입 없음 · 30초 소요
        </p>
      </div>
    </section>
  );
}
