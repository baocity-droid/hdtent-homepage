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
  representative: "김진성",
  domain: "https://hdtent.co.kr",
  phoneDisplay: "02-2687-5811",
  phone: "02-2687-5811",
  phoneHref: "tel:02-2687-5811",
  email: "baocity@naver.com",
  address: "서울특별시 구로구 경인로53길 15 나동 1403호",
  naverMapHref:
    "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EA%B2%BD%EC%9D%B8%EB%A1%9C53%EA%B8%B815%20%EB%82%98%EB%8F%991403%ED%98%B8",
  kakaoHref: "https://pf.kakao.com/_ylnXX",
  description:
    "정전기방지용 싸이로망, 여과포, 산업용 캔바스, 자바라 및 특수 천막 주문제작 전문업체 현대천막",
  introParagraphs: [
    "현대천막은 정전기방지용 싸이로망, 여과포, 산업용 캔바스, 자바라 및 각종 특수 천막을 전문 제작하는 업체입니다.",
    "다년간의 제작 경험과 기술력을 바탕으로 산업설비, 집진설비, 저장설비 등 다양한 산업현장에 최적화된 제품을 공급하고 있으며 고객의 요구사항에 맞춘 맞춤 제작 서비스를 제공합니다.",
    "품질과 내구성을 최우선으로 생각하며 신속한 제작과 납품을 통해 고객 만족을 실현하고 있습니다."
  ],
  headline: "산업용 캔바스 · 정전기방지용 싸이로망 전문 제작",
  subHeadline:
    "산업현장에 최적화된 맞춤형 캔바스, 자바라, 여과포 및 특수 천막을 제작합니다.",
  nav: [
    { label: "메인", href: "#home" },
    { label: "회사소개", href: "#about" },
    { label: "사업분야", href: "#business" },
    { label: "시공사례", href: "#portfolio" },
    { label: "견적문의", href: "#contact" }
  ]
};

export const businessAreas = [
  {
    title: "정전기방지용 싸이로망",
    description: "싸이로와 호퍼 구조에 맞춘 정전기방지용 망 및 커버 전문 제작",
    icon: Building2,
    image: "/images/projects/hero-large-silo.jpg",
    gallery: [
      "/images/projects/hero-large-silo.jpg",
      "/images/projects/silo-hopper-front.jpeg",
      "/images/projects/silo-canvas-corridor.jpeg",
      "/images/projects/silo-canvas-walkway.jpeg",
      "/images/projects/silo-hopper-side-1.jpg",
      "/images/projects/silo-hopper-side-2.jpg"
    ]
  },
  {
    title: "여과포 제작",
    description: "분진, 이송, 집진 설비 조건에 맞춘 여과포 제작",
    icon: Factory,
    image: "/images/projects/dust-collector-duct.jpeg",
    gallery: [
      "/images/projects/dust-collector-duct.jpeg",
      "/images/projects/industrial-canvas-flange.jpeg"
    ]
  },
  {
    title: "산업용 캔바스 제작",
    description: "공장 설비, 연결부, 보호 커버에 맞춘 산업용 캔바스 제작",
    icon: Layers3,
    image: "/images/projects/industrial-canvas-flange.jpeg",
    gallery: [
      "/images/projects/industrial-canvas-flange.jpeg",
      "/images/projects/dust-collector-duct.jpeg",
      "/images/projects/fabric-bellows-large.jpeg"
    ]
  },
  {
    title: "자바라 제작",
    description: "현장 치수와 작동 조건을 반영한 설비 보호용 자바라 제작",
    icon: Wrench,
    image: "/images/projects/installed-bellows.jpg",
    gallery: [
      "/images/projects/installed-bellows.jpg",
      "/images/projects/bellows-installed.jpg",
      "/images/projects/fabric-bellows-large.jpeg",
      "/images/projects/bellows-fabric.jpeg"
    ]
  },
  {
    title: "집진설비용 후드 및 캔바스",
    description: "집진설비와 덕트 연결부에 맞춘 후드, 캔바스, 연결 커버 제작",
    icon: Factory,
    image: "/images/projects/dust-collector-duct.jpeg",
    gallery: [
      "/images/projects/dust-collector-duct.jpeg",
      "/images/projects/industrial-canvas-flange.jpeg",
      "/images/projects/silo-canvas-walkway.jpeg"
    ]
  },
  {
    title: "각종 특수 천막 주문제작",
    description: "표준 규격으로 해결하기 어려운 천막과 산업용 특수 제품 맞춤 제작",
    icon: Hammer,
    image: "/images/projects/custom-cover-bag.jpeg",
    gallery: [
      "/images/projects/custom-cover-bag.jpeg",
      "/images/projects/fabric-bellows-large.jpeg"
    ]
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
    description: "정전기, 분진, 습도, 마찰 조건에 맞는 제작 방향을 제안합니다.",
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

export const heroImage = "/images/main-hero.png";

export const projectCategories = businessAreas.map((area) => ({
  title: area.title,
  description: area.description,
  images: area.gallery
}));
