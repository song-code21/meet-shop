"use client";

import FormField from "../(components)/ui/form/FormField";
import FormItem from "../(components)/ui/form/FormItem";
import Input from "../(components)/ui/Input";
import Button from "../(components)/ui/Button";

const Step4 = ({ form, onPrev }: any) => {
  return (
    <div className="space-y-8">
      <FormField name="email" control={form.control}>
        {(field, state) => (
          <FormItem label="이메일" error={state.error?.message} required>
            <Input {...field} placeholder="example@gmail.com" />
          </FormItem>
        )}
      </FormField>

      <FormField name="password" control={form.control}>
        {(field, state) => (
          <FormItem
            label="비밀번호"
            required
            error={state.error?.message}
            description="8자 이상 영문/숫자 조합"
          >
            <Input {...field} type="password" />
          </FormItem>
        )}
      </FormField>

      <FormField name="confirmPassword" control={form.control}>
        {(field, state) => (
          <FormItem label="비밀번호 확인" required error={state.error?.message}>
            <Input {...field} type="password" />
          </FormItem>
        )}
      </FormField>

      <div className="flex justify-between">
        <Button variant="secondary" onClick={onPrev}>
          이전
        </Button>
        <Button type="submit">회원가입 완료</Button>
      </div>
    </div>
  );
};

export default Step4;
