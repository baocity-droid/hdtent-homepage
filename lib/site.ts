import {
  Building2,
  Factory,
  Hammer,
  HardHat,
  Layers3,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench
} from "lucide-react";

export const site = {
  name: "현대천막",
  domain: "https://hdtent.co.kr",
  phoneDisplay: "전화문의",
  phoneHref: "tel:010-0000-0000",
  kakaoHref: "#contact",
  description:
    "산업용 캔버스, 자바라, 집진설비, 싸이로 및 호퍼, 특수 주문제작 전문 B2B 제조업체 현대천막입니다.",
  nav: [
    { label: "메인", href: "/" },
    { label: "회사소개", href: "/about" },
    { label: "사업분야", href: "/business" },
    { label: "시공사례", href: "/portfolio" },
    { label: "견적문의", href: "/contact" }
  ]
};

export const businessAreas = [
  {
    title: "산업용 캔버스",
    description: "공장 설비, 운송 라인, 보호 커버에 맞춘 내구성 중심 제작",
    icon: Layers3
  },
  {
    title: "자바라 제작",
    description: "현장 치수와 작동 조건을 반영한 설비 보호용 자바라",
    icon: Wrench
  },
  {
    title: "집진설비",
    description: "분진 발생 환경에 필요한 덕트, 후드, 연결 부품 제작",
    icon: Factory
  },
  {
    title: "싸이로 및 호퍼",
    description: "저장, 배출, 이송 흐름을 고려한 산업 설비 구성품",
    icon: Building2
  },
  {
    title: "특수 주문제작",
    description: "표준 규격으로 해결하기 어려운 현장 맞춤 제작",
    icon: Hammer
  }
];

export const strengths = [
  {
    title: "현장 맞춤 설계",
    description: "설비 조건, 설치 공간, 사용 환경을 먼저 확인합니다.",
    icon: HardHat
  },
  {
    title: "산업용 소재 이해",
    description: "마찰, 분진, 습도, 온도 조건에 맞는 제작 방향을 제안합니다.",
    icon: ShieldCheck
  },
  {
    title: "깔끔한 납품 품질",
    description: "반복 발주가 쉬운 치수 관리와 마감 품질을 지향합니다.",
    icon: Sparkles
  },
  {
    title: "빠른 상담",
    description: "도면, 사진, 대략 치수만 있어도 초기 견적 상담이 가능합니다.",
    icon: Phone
  }
];

export const cases = [
  "산업 설비 보호 캔버스 커버",
  "공장 라인 이동부 자바라",
  "집진 덕트 연결 캔버스",
  "싸이로 하부 배출부 제작",
  "현장 특수 규격 주문 제작",
  "노후 캔버스 교체 및 보수"
];
