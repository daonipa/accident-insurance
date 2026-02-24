"use client";
import { Shield, ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary opacity-5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-5 py-20 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-line rounded-full px-4 py-2 mb-8">
          <Shield className="w-4 h-4 text-primary" fill="currentColor" />
          <span className="text-sm font-medium text-body">통합상해보험 무료 설계</span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight tracking-tight text-heading mb-6">
          넘어지는 건 1초,
          <br />
          <span className="text-primary">치료비</span>는 1년치 월급.
        </h1>

        <p className="text-lg md:text-xl text-body mb-4 leading-relaxed">
          골절 한 번에 평균 치료비
          <strong className="text-warning text-2xl md:text-3xl font-extrabold ml-2">800만원</strong>
        </p>
        <p className="text-base md:text-lg text-muted mb-10">
          일상의 사고, 대비하고 계신가요?
        </p>

        <button
          onClick={scrollToForm}
          className="btn-pulse inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
        >
          무료 보장 진단 받기
        </button>

        <p className="text-sm text-muted mt-4">
          무료 상담 · 강제 가입 없음 · 30초 소요
        </p>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 float-animation">
          <ArrowDown className="w-6 h-6 text-muted" />
        </div>
      </div>
    </section>
  );
}