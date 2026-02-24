"use client";
import ScrollAnimation from "./ScrollAnimation";

const features = [
  { title: "교통사고 보장", desc: "자동차·대중교통 사고 시 치료비 보장" },
  { title: "골절·화상 실비", desc: "골절, 화상, 수술비 실비 지급" },
  { title: "소득 보전 일당", desc: "입원·통원 시 일당 지급으로 소득 보전" },
  { title: "가족 특약 추가", desc: "배우자·자녀까지 함께 보장 가능" },
];

export default function Solution() {
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-28 md:py-36 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 font-medium">Solution</p>
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight mb-5">
              통합상해보험이 해결합니다.
            </h2>
            <p className="text-body text-[15px] leading-relaxed max-w-xl mx-auto">
              교통사고부터 일상 사고까지. 치료비는 물론 소득 중단에 대한 일당 보장까지 하나의 보험으로 모두 해결합니다.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {features.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 80}>
              <div className="bg-white rounded-2xl p-7 border border-[#D5D5D5] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:border-[#BBBBBB] transition-all duration-300">
                <h4 className="font-bold text-heading mb-1.5">{item.title}</h4>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={400}>
          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="bg-[#111111] hover:bg-black text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:scale-[1.02]"
            >
              무료 보장 진단 받기
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
