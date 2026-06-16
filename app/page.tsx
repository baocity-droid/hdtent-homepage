import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  MessageCircle,
  Phone,
  Ruler,
  Send
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { businessAreas, cases, site, strengths } from "@/lib/site";

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="현대천막 홈">
          <span className="flex h-9 w-9 items-center justify-center rounded bg-brand-700 text-base font-black text-white">
            H
          </span>
          <span className="text-lg font-extrabold tracking-normal text-steel-950">현대천막</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-steel-800 lg:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-700">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="inline-flex h-10 items-center gap-2 rounded bg-brand-700 px-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-900"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
          </a>
          <a
            href={site.kakaoHref}
            className="inline-flex h-10 items-center justify-center rounded border border-steel-100 bg-white px-3 text-sm font-bold text-steel-950 transition hover:border-brand-100 hover:text-brand-700"
            aria-label="카카오톡 채널 문의"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[640px] overflow-hidden bg-steel-950 text-white">
      <Image
        src="/images/industrial-hero.png"
        alt="산업용 캔버스와 자바라 제작 현장"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/82 to-steel-950/20" />
      <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-center px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded bg-white/10 px-3 py-1 text-sm font-bold text-brand-50 ring-1 ring-white/20">
            산업설비 맞춤 제작 전문기업
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            현대천막
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-steel-100">
            산업용 캔버스, 자바라, 집진설비, 싸이로 및 호퍼까지 현장 조건에 맞춰
            제작하는 B2B 제조 파트너입니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded bg-brand-500 px-5 text-base font-extrabold text-white transition hover:bg-brand-700"
            >
              <Phone className="h-5 w-5" />
              전화문의
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded bg-white px-5 text-base font-extrabold text-steel-950 transition hover:bg-brand-50"
            >
              <ClipboardList className="h-5 w-5" />
              견적문의
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-sm font-extrabold uppercase tracking-normal text-brand-700">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-steel-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-7 text-steel-500">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" id="about">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="About"
              title="현장을 이해하는 제작 중심 기업"
              description="현대천막은 산업 설비에 필요한 캔버스와 자바라, 집진 관련 제작물을 현장 조건에 맞춰 공급합니다."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded border border-steel-100 bg-steel-50 p-5">
                    <Icon className="h-7 w-7 text-brand-700" />
                    <h3 className="mt-4 text-lg font-extrabold text-steel-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-steel-500">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8" id="business">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Business"
              title="사업분야"
              description="반복 생산품부터 현장 특수 규격까지 산업 현장에 맞는 제작 품목을 다룹니다."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {businessAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <article key={area.title} className="rounded border border-steel-100 bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded bg-brand-50 text-brand-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-extrabold text-steel-950">{area.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-steel-500">{area.description}</p>
                    <Link
                      href="/contact"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-700"
                    >
                      상담 요청 <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-steel-950 px-4 py-16 text-white sm:px-6 lg:px-8" id="portfolio">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Portfolio"
              title="시공사례"
              description="산업 현장별 치수와 사용 환경에 맞춰 다양한 제작 및 교체 작업을 진행합니다."
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {cases.map((item) => (
                <article key={item} className="rounded border border-white/10 bg-white/8 p-5">
                  <CheckCircle2 className="h-6 w-6 text-brand-100" />
                  <h3 className="mt-4 text-lg font-extrabold">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" id="contact">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionTitle
                eyebrow="Contact"
                title="견적문의"
                description="제작 품목, 설치 장소, 대략 치수, 현장 사진이나 도면을 함께 보내주시면 상담이 빨라집니다."
              />
              <div className="space-y-3">
                <a
                  href={site.phoneHref}
                  className="flex min-h-14 items-center gap-3 rounded bg-brand-700 px-4 font-extrabold text-white"
                >
                  <Phone className="h-5 w-5" />
                  전화문의
                </a>
                <a
                  href={site.kakaoHref}
                  className="flex min-h-14 items-center gap-3 rounded border border-steel-100 bg-steel-50 px-4 font-extrabold text-steel-950"
                >
                  <MessageCircle className="h-5 w-5 text-brand-700" />
                  카카오톡 채널
                </a>
              </div>
            </div>
            <form className="rounded border border-steel-100 bg-steel-50 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-bold text-steel-800">
                  회사명
                  <input className="mt-2 h-12 w-full rounded border border-steel-100 bg-white px-3 outline-none focus:border-brand-500" />
                </label>
                <label className="block text-sm font-bold text-steel-800">
                  연락처
                  <input className="mt-2 h-12 w-full rounded border border-steel-100 bg-white px-3 outline-none focus:border-brand-500" />
                </label>
              </div>
              <label className="mt-4 block text-sm font-bold text-steel-800">
                문의 품목
                <select className="mt-2 h-12 w-full rounded border border-steel-100 bg-white px-3 outline-none focus:border-brand-500">
                  {businessAreas.map((area) => (
                    <option key={area.title}>{area.title}</option>
                  ))}
                </select>
              </label>
              <label className="mt-4 block text-sm font-bold text-steel-800">
                현장 정보
                <textarea className="mt-2 min-h-36 w-full rounded border border-steel-100 bg-white p-3 outline-none focus:border-brand-500" />
              </label>
              <button
                type="button"
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded bg-brand-700 px-5 text-base font-extrabold text-white transition hover:bg-brand-900 sm:w-auto"
              >
                <Send className="h-5 w-5" />
                문의 보내기
              </button>
              <p className="mt-4 flex gap-2 text-sm leading-6 text-steel-500">
                <Ruler className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                정확한 견적은 현장 조건 확인 후 안내됩니다.
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
