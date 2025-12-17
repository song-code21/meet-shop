const Footer = () => {
  return (
    <footer className="w-full bg-zinc-100 mt-16 border-t">
      <div className="max-w-5xl mx-auto px-4 py-10 text-sm text-zinc-600">
        {/* Brand */}
        <div className="font-semibold text-zinc-800 text-lg">황뜰미트</div>

        {/* Info */}
        <div className="mt-4 space-y-1">
          <p>상호명: 황뜰미트</p>
          <p>사업자등록번호: 123-45-67890</p>
          <p>대표: 조규상</p>
          <p>주소: 인천시 백범로 577번길 15-19</p>
        </div>

        {/* CS */}
        <div className="mt-6">
          <p className="font-medium text-zinc-800">고객센터</p>
          <p>전화: 010-1234-5678</p>
          <p>운영시간: 09:00 ~ 18:00 (주말/공휴일 휴무)</p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-xs text-zinc-500">
          © {new Date().getFullYear()} 금천미트. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
