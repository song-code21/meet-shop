"use client";

import Link from "next/link";

const MyPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">👤 마이페이지</h1>

      {/* 사용자 기본 정보 */}
      <section className="bg-white border rounded-lg p-6 mb-10">
        <h2 className="text-lg font-semibold mb-3">내 정보</h2>

        <p className="text-zinc-700">이름: 홍길동</p>
        <p className="text-zinc-700">이메일: test@example.com</p>

        <Link
          href="/mypage/edit"
          className="inline-block mt-4 text-red-600 font-medium hover:underline"
        >
          정보 수정하기 →
        </Link>
      </section>

      {/* 주문 내역 */}
      <section className="bg-white border rounded-lg p-6 mb-10">
        <h2 className="text-lg font-semibold mb-3">주문 내역</h2>

        <div className="text-zinc-600">주문 기록이 없습니다.</div>

        <Link
          href="/products"
          className="inline-block mt-4 text-red-600 font-medium hover:underline"
        >
          상품 보러가기 →
        </Link>
      </section>

      {/* 로그아웃 */}
      <section className="bg-white border rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-3">기타</h2>

        <button className="text-zinc-600 hover:text-red-600 font-medium">
          로그아웃
        </button>
      </section>
    </main>
  );
};
export default MyPage;
