"use client";
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
    <section className="py-28 md:py-36 bg-[#F5F5F7]">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 font-medium">Benefits</p>
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight">
              이런 점이 다릅니다.
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div className="bg-white rounded-2xl p-8 h-full shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary-light text-xs font-bold text-primary mb-5">{item.number}</span>
                <h3 className="text-[17px] font-bold text-heading mb-3">{item.title}</h3>
                <p className="text-sm text-body leading-relaxed">{item.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
