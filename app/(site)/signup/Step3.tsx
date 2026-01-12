import Button from "../../(components)/ui/Button";
import FormField from "../../(components)/ui/form/FormField";
import FormItem from "../../(components)/ui/form/FormItem";
import Input from "../../(components)/ui/Input";

const Step3 = ({ form, onNext, onPrev }: any) => {
  const memberType = form.watch("memberType");

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold">
        {memberType === "business"
          ? "사업자 정보를 입력해주세요"
          : "기본 정보를 입력해주세요"}
      </h2>

      {memberType === "business" && (
        <FormField name="businessNumber" control={form.control}>
          {(field, state) => (
            <FormItem label="사업자번호" error={state.error?.message}>
              <Input {...field} placeholder="000-00-00000" />
            </FormItem>
          )}
        </FormField>
      )}

      <FormField name="name" control={form.control}>
        {(field, state) => (
          <FormItem label="성함" error={state.error?.message}>
            <Input {...field} placeholder="홍길동" />
          </FormItem>
        )}
      </FormField>

      {memberType === "business" && (
        <FormField name="storeName" control={form.control}>
          {(field, state) => (
            <FormItem label="업체명" error={state.error?.message}>
              <Input {...field} placeholder="금천미트" />
            </FormItem>
          )}
        </FormField>
      )}

      <div className="flex justify-between">
        <Button onClick={onPrev} variant="secondary">
          이전
        </Button>
        <Button onClick={onNext}>다음 단계</Button>
      </div>
    </div>
  );
};

export default Step3;
