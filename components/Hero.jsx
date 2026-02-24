"use client";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-dark relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32 lg:pt-44 lg:pb-40 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-muted mb-10 font-medium">
          통합상해보험
        </p>

        <h1 className="text-[2.25rem] md:text-[3.25rem] lg:text-[4rem] font-bold leading-[1.15] tracking-tight text-white mb-10">
          넘어지는 건 1초,<br />치료비는 1년치 월급.
        </h1>

        <div className="mb-14">
          <p className="text-base md:text-lg text-muted mb-2 font-light">
            골절 한 번 평균 치료비
          </p>
          <p className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            800<span className="text-primary">만원</span>
          </p>
        </div>

        <button
          onClick={scrollToForm}
          className="bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-14 py-5 rounded-full transition-all duration-300 cursor-pointer shadow-[0_4px_24px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_32px_rgba(37,99,235,0.45)] hover:scale-[1.03]"
        >
          무료 보장 진단 받기
        </button>

        <p className="text-sm text-body mt-4">
          강제 가입 없음 · 30초 소요
        </p>
      </div>
    </section>
  );
}
