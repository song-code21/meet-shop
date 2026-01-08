import Button from "../(components)/ui/Button";
import FormField from "../(components)/ui/form/FormField";
import FormItem from "../(components)/ui/form/FormItem";
import Radio from "../(components)/ui/Radio";

const Step1 = ({ form, onNext }: any) => {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold">회원 유형을 선택해주세요</h2>

      <FormField name="memberType" control={form.control}>
        {(field) => (
          <FormItem>
            <div className="flex gap-6">
              <Radio
                id="normal"
                label="일반회원"
                checked={field.value === "normal"}
                onChange={() => field.onChange("normal")}
              />
              <Radio
                id="business"
                label="사업자회원"
                checked={field.value === "business"}
                onChange={() => field.onChange("business")}
              />
            </div>
          </FormItem>
        )}
      </FormField>

      <Button onClick={onNext} full>
        다음 단계
      </Button>
    </div>
  );
};

export default Step1;
