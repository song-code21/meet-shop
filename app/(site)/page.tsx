"use client";

import Link from "next/link";
import ProductCard from "./(components)/productCard";
import Button from "./(components)/ui/Button";

const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "한우 등심 1++",
    price: 42000,
    description: "구이용 300g 포장",
  },
  {
    id: "2",
    name: "국내산 삼겹살",
    price: 16800,
    description: "구이/수육 겸용",
  },
];
export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full h-[300px] bg-brand-primary text-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold">신선한 고기, 황뜰미트</h1>
        <p className="text-lg mt-2 opacity-90">
          오늘 도축한 신선한 고기만 판매합니다!
        </p>
        <Link href="/products">
          <Button size="lg">상품보러가기</Button>
        </Link>
      </section>

      {/* 추천상품 */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold mb-4">오늘의 추천 상품</h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {/* Dummy Card */}
          {MOCK_PRODUCTS.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>
      {/* HELP SECTION */}
      <section className="w-full bg-zinc-50 py-12 mt-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-2">도움이 필요하신가요?</h2>
          <p className="text-zinc-600 mb-8">
            황뜰미트 고객센터가 항상 도와드릴 준비가 되어 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="tel:01012345678"
              variant="primary"
              size="md"
              className="flex-1"
            >
              📞 전화 상담
            </Button>

            <Button
              href="https://pf.kakao.com/..."
              variant="secondary"
              size="md"
              className="flex-1"
            >
              💬 카카오톡 문의
            </Button>

            <Button
              href="/faq"
              variant="secondary"
              size="md"
              className="flex-1"
            >
              📘 자주 묻는 질문
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
