import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Ruler,
  Send,
  SquareArrowOutUpRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { businessAreas, heroImage, projectCategories, site, strengths } from "@/lib/site";

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
            <span className="sm:hidden">전화</span>
          </a>
          <a
            href={site.kakaoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded border border-[#f3d600] bg-[#fee500] px-3 text-sm font-extrabold text-[#191600] transition hover:bg-[#f7dc00]"
            aria-label="카카오톡 상담 새 창 열기"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">카카오톡 상담</span>
            <span className="sm:hidden">카톡</span>
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
        src={heroImage}
        alt="현대천막 정전기방지용 싸이로망 대형 시공 현장"
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
            {site.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-steel-100">
            {site.subHeadline}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <a
              href={site.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-brand-500 px-5 text-base font-extrabold text-white transition hover:bg-brand-700"
            >
              <Phone className="h-5 w-5" />
              전화문의
            </a>
            <a
              href={site.kakaoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[#fee500] px-5 text-base font-extrabold text-[#191600] transition hover:bg-[#f7dc00]"
            >
              <MessageCircle className="h-5 w-5" />
              카카오톡 상담
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-white px-5 text-base font-extrabold text-steel-950 transition hover:bg-brand-50"
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

function NaverMapButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={site.naverMapHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[#03c75a] px-4 text-sm font-extrabold text-white transition hover:bg-[#02b350] ${className}`}
    >
      <MapPin className="h-5 w-5" />
      네이버 지도 길찾기
      <SquareArrowOutUpRight className="h-4 w-4" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-steel-100 bg-steel-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xl font-extrabold">{site.name}</p>
            <dl className="mt-4 grid gap-2 text-sm leading-6 text-steel-100 sm:grid-cols-2">
              <div>
                <dt className="font-bold text-white">대표자</dt>
                <dd>{site.representative}</dd>
              </div>
              <div>
                <dt className="font-bold text-white">대표번호</dt>
                <dd>{site.phone}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-bold text-white">주소</dt>
                <dd>{site.address}</dd>
              </div>
            </dl>
          </div>
          <NaverMapButton className="w-full md:w-auto" />
        </div>
      </div>
    </footer>
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
              description="산업현장에 최적화된 맞춤 제작 서비스를 제공합니다."
            />
            <div className="mb-8 max-w-3xl space-y-4 text-base leading-8 text-steel-600">
              {site.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mb-8 grid gap-3 rounded border border-steel-100 bg-steel-50 p-5 text-sm font-bold text-steel-800 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-steel-500">회사명</p>
                <p className="mt-1 text-steel-950">{site.name}</p>
              </div>
              <div>
                <p className="text-steel-500">대표자</p>
                <p className="mt-1 text-steel-950">{site.representative}</p>
              </div>
              <div>
                <p className="text-steel-500">대표번호</p>
                <p className="mt-1 text-steel-950">{site.phone}</p>
              </div>
              <div>
                <p className="text-steel-500">이메일</p>
                <p className="mt-1 text-steel-950">{site.email}</p>
              </div>
              <div className="md:col-span-2 lg:col-span-4">
                <p className="text-steel-500">주소</p>
                <p className="mt-1 text-steel-950">{site.address}</p>
              </div>
            </div>
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
              description="정전기방지용 싸이로망, 여과포 제작, 산업용 캔바스 제작, 자바라 제작, 집진설비용 후드 및 캔바스, 각종 특수 천막을 현장 조건에 맞춰 주문제작합니다."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {businessAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <article key={area.title} className="overflow-hidden rounded border border-steel-100 bg-white shadow-sm">
                    <div className="relative aspect-[4/3] bg-steel-100">
                      <Image
                        src={area.image}
                        alt={`${area.title} 시공 사진`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
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
                    </div>
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
            <div className="space-y-10">
              {projectCategories.map((category) => (
                <article key={category.title}>
                  <div className="mb-4 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-brand-100" />
                    <div>
                      <h3 className="text-xl font-extrabold">{category.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-steel-100">{category.description}</p>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {category.images.map((image, index) => (
                      <div
                        key={`${category.title}-${image}`}
                        className="relative aspect-[4/3] overflow-hidden rounded border border-white/10 bg-white/8"
                      >
                        <Image
                          src={image}
                          alt={`${category.title} 시공 사진 ${index + 1}`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
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
                  대표전화 {site.phone}
                </a>
                <a
                  href={site.emailHref}
                  className="flex min-h-14 items-center gap-3 rounded border border-steel-100 bg-steel-50 px-4 font-extrabold text-steel-950"
                >
                  <Mail className="h-5 w-5 text-brand-700" />
                  이메일 문의 {site.email}
                </a>
                <a
                  href={site.kakaoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-14 items-center gap-3 rounded border border-[#f3d600] bg-[#fee500] px-4 font-extrabold text-[#191600]"
                >
                  <MessageCircle className="h-5 w-5" />
                  카카오톡 상담
                </a>
                <p className="flex gap-2 rounded border border-steel-100 bg-white px-4 py-3 text-sm font-bold leading-6 text-steel-800">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                  {site.address}
                </p>
                <NaverMapButton className="w-full" />
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
              <a
                href={site.emailHref}
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded bg-brand-700 px-5 text-base font-extrabold text-white transition hover:bg-brand-900 sm:w-auto"
              >
                <Send className="h-5 w-5" />
                이메일로 문의하기
              </a>
              <p className="mt-4 flex gap-2 text-sm leading-6 text-steel-500">
                <Ruler className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                정확한 견적은 현장 조건 확인 후 안내됩니다.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
