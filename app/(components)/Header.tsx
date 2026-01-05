"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const CATEGORIES = [
  { label: "전체상품", href: "/products" },
  { label: "반짝특가", href: "/deals" },
  { label: "기획전&이벤트", href: "/events" },
] as const;

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="w-full border-b bg-white sticky top-0 z-10">
      <div className="mx-auto flex h-14 max-w-5xl items-center px-4 text-black">
        <div className="flex-1">
          <a href="/" className="text-lg font-semibold">
            🥩 황뜰미트 유황꿀돼지
          </a>
        </div>
        <div className="flex-1 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="원하시는 상품을 검색하세요…"
              className="w-full rounded-lg border border-zinc-300 px-4 py-2 pl-10 text-sm focus:border-red-500 focus:outline-none"
            />
            <span className="absolute left-3 top-2.5 text-zinc-500">🔍</span>
          </div>
        </div>
        <nav className="flex gap-4 text-sm justify-end flex-1">
          <a href="/login">로그인</a>
          <a href="/signup">회원가입</a>
          <a href="/cart">고객센터</a>
          <a href="/cart"> 🛒</a>
          <a href="/mypage"> 👤</a>
        </nav>
      </div>
      <div className="mx-auto flex h-14 max-w-5xl items-center px-4 text-black">
        <nav className="hidden items-center gap-2 sm:flex">
          {CATEGORIES.map((cat) => {
            const isActive =
              pathname === cat.href || pathname.startsWith(cat.href + "/");

            return (
              <Link
                key={cat.href}
                href={cat.href}
                className={clsx(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-brand-primary text-white"
                    : "text-brand-gray700 hover:bg-brand-gray100"
                )}
              >
                {cat.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
export default Header;
