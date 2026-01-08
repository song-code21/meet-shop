"use client";

import Link from "next/link";
import Button from "../(components)/ui/Button";

const LoginPage = () => {
  return (
    <main className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="w-full max-w-sm bg-white border rounded-lg p-6 shadow-sm">
        {/* 제목 */}
        <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>

        {/* 아이디 */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">아이디</label>
          <input
            type="email"
            placeholder="아이디를 입력해주세요"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-500"
          />
        </div>

        {/* 비밀번호 */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-500"
          />
        </div>

        {/* 로그인 버튼 */}
        <Button variant="primary" full>
          로그인
        </Button>

        {/* 기타 */}
        <div className="text-center mt-6 text-sm text-zinc-600">
          계정이 없으신가요?{" "}
          <Link
            href="/signup"
            className="text-red-600 font-medium hover:underline"
          >
            회원가입
          </Link>
        </div>
      </div>
    </main>
  );
};
export default LoginPage;
