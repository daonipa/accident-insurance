"use client";
import ScrollAnimation from "./ScrollAnimation";

const problems = [
  {
    number: "01",
    title: "사고는 일상에서 발생합니다",
    description: "전체 상해사고의 70%가 집·직장 등 일상 공간에서 발생합니다. 누구에게나 일어날 수 있는 일입니다.",
  },
  {
    number: "02",
    title: "산재 미적용, 100% 자기 부담",
    description: "출퇴근 중 사고, 주말 운동 중 부상은 산재로 인정되지 않습니다. 수백만원의 치료비를 온전히 부담해야 합니다.",
  },
  {
    number: "03",
    title: "소득 중단, 이중 부담",
    description: "골절로 6주 깁스를 하면 평균 2~3개월 소득이 중단됩니다. 치료비 + 생활비, 이중 부담이 시작됩니다.",
  },
];

export default function Problem() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 font-medium">Problem</p>
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight">
              일상의 사고, 대비하고 계신가요?
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 120}>
              <div className="bg-white rounded-2xl p-8 h-full border border-[#D5D5D5] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:border-[#BBBBBB] transition-all duration-300">
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
