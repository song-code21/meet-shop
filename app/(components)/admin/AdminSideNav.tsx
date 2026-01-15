"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavItem = {
  label: string;
  href: string;
};

type AdminSideNavProps = {
  pageName: string;
  navItems: NavItem[];
};

const AdminSideNav = ({ navItems, pageName }: AdminSideNavProps) => {
  const pathname = usePathname();

  return (
    <nav className="mt-6 flex flex-col gap-1">
      <h1 className="text-xl font-bold text-center">{pageName}</h1>
      {navItems.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(item.href + "/");

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "rounded-xl px-3 py-2 text-sm font-medium transition",
              isActive
                ? "bg-brand-primary text-white"
                : "text-brand-gray800 hover:bg-brand-gray100"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default AdminSideNav;
