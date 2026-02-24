"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const faqs = [
  {
    question: "통합상해보험은 어떤 사고를 보장하나요?",
    answer: "교통사고, 운동 중 부상, 산업재해, 일상생활 사고 등 모든 유형의 상해를 보장합니다. 골절, 화상, 수술, 입원 등 다양한 치료비를 실비로 지원합니다.",
  },
  {
    question: "실비보험이 있는데 상해보험도 필요한가요?",
    answer: "실비보험은 치료비만 보장하지만, 통합상해보험은 소득 보전 일당, 후유장해 보험금 등 실비보험이 커버하지 못하는 영역까지 보장합니다.",
  },
  {
    question: "보험료는 얼마 정도인가요?",
    answer: "나이, 직업, 보장 범위에 따라 다르지만, 월 2만원대부터 설계가 가능합니다. 무료 상담을 통해 최적의 보험료를 확인하세요.",
  },
  {
    question: "고령자도 가입할 수 있나요?",
    answer: "네, 연령대에 맞는 맞춤 설계가 가능합니다. 특히 고령자분들은 낙상, 골절 위험이 높아 상해보험의 필요성이 더 큽니다.",
  },
  {
    question: "상담 후 반드시 가입해야 하나요?",
    answer: "절대 아닙니다. 무료 상담은 현재 보장 상태를 확인하고, 필요한 보장을 파악하는 과정입니다. 가입 여부는 전적으로 본인의 선택입니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.15em] uppercase text-muted mb-4 font-medium">FAQ</p>
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight">
              자주 묻는 질문
            </h2>
          </div>
        </ScrollAnimation>

        <div className="border-t border-line">
          {faqs.map((faq, i) => (
            <ScrollAnimation key={i} delay={i * 60}>
              <div className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                >
                  <span className="text-[15px] font-medium text-heading pr-8 group-hover:text-primary transition-colors duration-200">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-body leading-relaxed pr-12">{faq.answer}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
