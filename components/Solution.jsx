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
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <p className="text-sm tracking-[0.15em] uppercase text-muted mb-4 font-medium">Solution</p>
          <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight mb-6">
            통합상해보험이<br />해결합니다.
          </h2>
          <p className="text-body text-[15px] leading-relaxed mb-12 max-w-xl">
            교통사고부터 일상 사고까지. 치료비는 물론 소득 중단에 대한 일당 보장까지 하나의 보험으로 모두 해결합니다.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 border border-line hover:border-[#CCCCCC] transition-colors duration-300">
                <h4 className="font-semibold text-heading mb-1.5">{item.title}</h4>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={400}>
          <div className="mt-12">
            <button
              onClick={scrollToForm}
              className="bg-heading hover:bg-black text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-300 cursor-pointer text-[15px]"
            >
              무료 보장 진단 받기
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
