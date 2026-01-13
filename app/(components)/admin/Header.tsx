"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const CATEGORIES = [
  { label: "주문배송관리", href: "/admin/order" },
  { label: "상품관리", href: "/admin/product" },
  { label: "배너관리", href: "/admin/banner" },
  { label: "기획전&이벤트관리", href: "/admin/events" },
  { label: "회원관리", href: "/admin/order" },
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
