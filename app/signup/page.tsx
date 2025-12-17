"use client";

import { useState } from "react";
import Button from "../(components)/ui/Button";
import Input from "../(components)/ui/Input";

const SignupPage = () => {
  const [step, setStep] = useState(1);

  return (
    <main className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md bg-white border rounded-lg p-6 shadow-sm">
        {step === 1 && <Step1Terms onNext={() => setStep(2)} />}
        {step === 2 && (
          <Step2BizCheck onNext={() => setStep(3)} onPrev={() => setStep(1)} />
        )}
        {step === 3 && <Step3Account />}
      </div>
    </main>
  );
};

const Step1Terms = ({ onNext }: { onNext: () => void }) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">약관 동의</h1>

      <div className="space-y-3 text-sm mb-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          이용약관 동의 (필수)
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          개인정보 처리방침 동의 (필수)
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          마케팅 이용 동의 (선택)
        </label>
      </div>

      <Button full variant="primary" onClick={onNext}>
        다음 단계 →
      </Button>
    </div>
  );
};

const Step2BizCheck = ({
  onNext,
  onPrev,
}: {
  onNext: () => void;
  onPrev: () => void;
}) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">사업자 등록 확인</h1>

      <p className="text-sm text-zinc-600 mb-4">
        사업자 등록번호를 입력해주세요.
      </p>
      <Input type="text" placeholder="000-0000-0000" />
      <div className="flex gap-3">
        <Button variant="secondary" full onClick={onPrev}>
          뒤로
        </Button>
        <Button variant="primary" full onClick={onNext}>
          확인하고 다음 →
        </Button>
      </div>
    </div>
  );
};

function Step3Account() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">계정 정보 입력</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">아이디(이메일)</label>
        <Input type="email" placeholder="email@example.com" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">비밀번호</label>
        <Input type="password" placeholder="영문+숫자 8자 이상" />
      </div>

      <Button full variant="primary">
        회원가입 완료
      </Button>
    </div>
  );
}
export default SignupPage;
