import Link from "next/link";
import Button from "../../(components)/ui/Button";

const FAQ = [
  {
    q: "배송은 언제 도착하나요?",
    a: "결제 완료 후 영업일 기준 1~2일 내 출고돼요. 지역/택배사 사정에 따라 변동될 수 있어요.",
  },
  {
    q: "교환/환불은 어떻게 하나요?",
    a: "상품 수령 후 7일 이내 고객센터로 문의해주면 안내해드려요. 신선식품 특성상 단순 변심 반품은 제한될 수 있어요.",
  },
  {
    q: "반짝특가는 어떤 기준으로 진행되나요?",
    a: "재고/프로모션 상황에 따라 기간 한정으로 진행돼요. 조기 품절될 수 있어요.",
  },
] as const;

export default function SupportPage() {
  return (
    <div className="space-y-10">
      {/* 헤더 */}
      <section className="space-y-2">
        <h1 className="text-2xl font-bold">고객센터</h1>
        <p className="text-brand-gray600">
          주문/배송/교환·환불 관련 문의는 아래 채널에서 도와드리겠습니다.
        </p>
      </section>

      {/* 빠른 문의 */}
      <section className="rounded-2xl border border-brand-gray200 bg-white p-6 space-y-4">
        <h2 className="text-lg font-semibold">빠른 문의</h2>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-brand-gray200 p-4">
            <p className="text-sm text-brand-gray600">전화</p>
            <p className="mt-1 font-semibold">010-0000-0000</p>
            <p className="mt-2 text-xs text-brand-gray600">운영시간 내 연결</p>
          </div>

          <div className="rounded-xl border border-brand-gray200 p-4">
            <p className="text-sm text-brand-gray600">카카오톡</p>
            <p className="mt-1 font-semibold">@황뜰미트</p>
            <p className="mt-2 text-xs text-brand-gray600">24시간 접수</p>
          </div>

          <div className="rounded-xl border border-brand-gray200 p-4">
            <p className="text-sm text-brand-gray600">이메일</p>
            <p className="mt-1 font-semibold">help@hwangddleat.com</p>
            <p className="mt-2 text-xs text-brand-gray600">
              영업일 1~2일 내 답변
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button full>카카오톡 문의하기</Button>
          <Link href="/orders" className="sm:w-auto w-full">
            <Button full variant="secondary">
              주문 조회하기
            </Button>
          </Link>
        </div>
      </section>

      {/* 운영/정책 안내 */}
      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-brand-gray200 bg-white p-6 space-y-3">
          <h2 className="text-lg font-semibold">운영시간</h2>
          <ul className="text-sm text-brand-gray700 space-y-1">
            <li>평일: 09:00 ~ 18:00</li>
            <li>점심: 12:00 ~ 13:00</li>
            <li>주말/공휴일: 휴무</li>
          </ul>
          <p className="text-xs text-brand-gray600">
            * 접수된 문의는 영업일 기준 순차 처리돼.
          </p>
        </div>

        <div className="rounded-2xl border border-brand-gray200 bg-white p-6 space-y-3">
          <h2 className="text-lg font-semibold">배송/교환·환불 안내</h2>
          <ul className="text-sm text-brand-gray700 space-y-1">
            <li>배송: 결제 완료 후 영업일 1~2일 내 출고</li>
            <li>교환/환불: 수령 후 7일 이내 문의</li>
            <li>신선식품 특성상 상품 상태에 따라 제한될 수 있음</li>
          </ul>
          <div className="pt-2">
            <Link
              href="/policies"
              className="text-sm font-medium text-brand-primary hover:underline"
            >
              자세한 정책 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-2xl border border-brand-gray200 bg-white p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">자주 묻는 질문</h2>
          <Link
            href="/support/faq"
            className="text-sm font-medium text-brand-primary hover:underline"
          >
            FAQ 더보기 →
          </Link>
        </div>

        <div className="space-y-3">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-brand-gray200 px-4 py-3"
            >
              <summary className="cursor-pointer list-none font-medium text-brand-gray900 flex items-center justify-between">
                <span>{item.q}</span>
                <span className="text-brand-gray600 group-open:rotate-180 transition">
                  ⌄
                </span>
              </summary>
              <p className="mt-2 text-sm text-brand-gray700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 하단 안내 */}
      <section className="text-xs text-brand-gray600">
        <p>
          주문 관련 문의는{" "}
          <span className="font-medium text-brand-gray900">주문번호</span>를
          함께 남겨주면 더 빨리 도와드릴 수 있습니다.
        </p>
      </section>
    </div>
  );
}
