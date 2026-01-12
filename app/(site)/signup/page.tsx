"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../../(components)/ui/form/Form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const SignUpPage = () => {
  const [step, setStep] = useState(1);

  const form = useForm({
    defaultValues: {
      memberType: "normal",
      businessNumber: "",
      terms: false,
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      storeName: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("최종 회원가입 데이터: ", data);
  };

  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-2xl font-bold mb-8">회원가입</h1>

      <Form onSubmit={form.handleSubmit(onSubmit)}>
        {step === 1 && <Step1 form={form} onNext={() => setStep(2)} />}
        {step === 2 && (
          <Step2
            form={form}
            onNext={() => setStep(3)}
            onPrev={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <Step3
            form={form}
            onNext={() => setStep(4)}
            onPrev={() => setStep(2)}
          />
        )}
        {step === 4 && <Step4 form={form} onPrev={() => setStep(3)} />}
      </Form>
    </div>
  );
};

export default SignUpPage;
