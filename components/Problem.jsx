"use client";
import { Footprints, BriefcaseMedical, TrendingDown } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const problems = [
  {
    icon: Footprints,
    title: "사고는 일상에서 발생합니다",
    description: "계단, 운동, 출퇴근길. 전체 상해사고의 70%가 집·직장 등 일상 공간에서 발생합니다. 누구에게나 일어날 수 있는 일입니다.",
    color: "#FF6B35",
  },
  {
    icon: BriefcaseMedical,
    title: "산재 미적용, 자기 부담 100%",
    description: "출퇴근 중 사고, 주말 운동 중 부상은 산재로 인정되지 않습니다. 수백만원의 치료비를 온전히 부담해야 합니다.",
    color: "#F97316",
  },
  {
    icon: TrendingDown,
    title: "깁스만 해도 소득이 멈춥니다",
    description: "골절로 6주 깁스를 하면 평균 2~3개월 소득이 중단됩니다. 치료비 + 생활비, 이중 부담이 시작됩니다.",
    color: "#00C48C",
  },
];

export default function Problem() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide">PROBLEM</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-heading mb-4">
              이런 고민, 하고 계신가요?
            </h2>
            <p className="text-base md:text-lg text-body max-w-2xl mx-auto">
              사고는 예고 없이, 치료비는 예상 밖으로 찾아옵니다
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 150}>
              <div className="bg-surface rounded-3xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${item.color}15` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-bold text-heading mb-3">{item.title}</h3>
                <p className="text-body text-sm leading-relaxed">{item.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
