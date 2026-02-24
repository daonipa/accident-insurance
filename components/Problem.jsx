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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <p className="text-sm tracking-[0.15em] uppercase text-[#999999] mb-4 font-medium">Problem</p>
          <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight mb-16">
            일상의 사고,<br />대비하고 계신가요?
          </h2>
        </ScrollAnimation>

        <div className="space-y-0 border-t border-line">
          {problems.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div className="flex items-start gap-6 py-8 border-b border-line">
                <span className="text-sm font-medium text-muted flex-shrink-0 mt-1 w-8">{item.number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-heading mb-2">{item.title}</h3>
                  <p className="text-body text-[15px] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
