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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <p className="text-sm tracking-[0.15em] uppercase text-muted mb-4 font-medium">Benefits</p>
          <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight mb-16">
            이런 점이 다릅니다.
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div>
                <span className="text-xs font-semibold text-primary tracking-wider">{item.number}</span>
                <h3 className="text-lg font-semibold text-heading mt-2 mb-3">{item.title}</h3>
                <p className="text-[15px] text-body leading-relaxed">{item.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
