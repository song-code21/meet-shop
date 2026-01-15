import AdminSideNav from "../../../(components)/admin/AdminSideNav";
const BannerPage = () => {
  const bannerPageNavItem = [{ label: "배너관리", href: "/admin/banner" }];
  return (
    <div className="flex flex-col gap-4">
      <aside className="w-60 h-screen border-r border-zinc-200 bg-white p-4">
        <AdminSideNav navItems={bannerPageNavItem} pageName={"배너관리"} />
      </aside>
    </div>
  );
};
export default BannerPage;
