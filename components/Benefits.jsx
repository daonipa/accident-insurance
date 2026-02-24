"use client";
import { BadgeCheck } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const benefits = [
  {
    number: "01",
    title: "교통사고~일상사고 통합 보장",
    description: "교통사고, 운동 중 부상, 산업재해 등 모든 유형의 상해를 하나의 보험으로 보장합니다.",
  },
  {
    number: "02",
    title: "골절·화상·수술비 실비 보장",
    description: "골절, 화상, 수술 등 주요 치료비를 실비로 보장받아 경제적 부담을 줄여줍니다.",
  },
  {
    number: "03",
    title: "소득 보전 일당 지급",
    description: "입원이나 통원 치료 시 일당을 지급받아 소득 중단으로 인한 생활비 부담을 덜어줍니다.",
  },
  {
    number: "04",
    title: "가족 특약 추가 가능",
    description: "배우자와 자녀까지 함께 보장하는 가족 특약으로 온 가족을 한 번에 보호합니다.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--primary)] mb-3 tracking-wide">BENEFITS</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
              통합상해보험, 이런 점이 다릅니다
            </h2>
          </div>
        </ScrollAnimation>

        <div className="space-y-4">
          {benefits.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div className="flex items-start gap-5 bg-[var(--bg-section)] rounded-2xl p-6 md:p-8 hover:bg-[var(--primary-light)] transition-colors duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center font-extrabold text-sm group-hover:scale-110 transition-transform duration-300">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                    {item.title}
                    <BadgeCheck className="w-5 h-5 text-[var(--primary)]" />
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
