"use client";
import { Car, Bone, Banknote, Users } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function Solution() {
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-5xl mx-auto px-5">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide">SOLUTION</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-heading mb-4">
              통합상해보험이 해결합니다
            </h2>
            <p className="text-base md:text-lg text-body">
              일상 사고부터 중대 재해까지, 하나로 끝내는 올인원 보장
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-heading mb-6 leading-snug">
                  교통사고부터 일상 사고까지
                  <br /><span className="text-primary">하나의 보험</span>으로 모두 보장
                </h3>
                <p className="text-body leading-relaxed mb-8">
                  통합상해보험은 교통사고, 골절, 화상, 수술 등 모든 유형의 상해를 하나의 보험으로 보장합니다.
                  치료비는 물론, 소득 중단에 대한 일당 보장까지 포함됩니다.
                </p>
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                >
                  무료 보장 진단 받기
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Car, title: "교통사고 보장", desc: "자동차·대중교통 사고 시 치료비 보장" },
                  { icon: Bone, title: "골절·화상 실비", desc: "골절, 화상, 수술비 실비 지급" },
                  { icon: Banknote, title: "소득 보전 일당", desc: "입원·통원 시 일당 지급으로 소득 보전" },
                  { icon: Users, title: "가족 특약 추가", desc: "배우자·자녀까지 함께 보장 가능" },
                ].map((item, i) => (
                  <div key={i} className="bg-surface rounded-2xl p-5 hover:bg-primary-light transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-bold text-sm text-heading mb-1">{item.title}</h4>
                    <p className="text-xs text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
