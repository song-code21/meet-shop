import Button from "../(components)/ui/Button";
import Checkbox from "../(components)/ui/CheckBox";
import FormField from "../(components)/ui/form/FormField";
import FormItem from "../(components)/ui/form/FormItem";

const Step2 = ({ form, onNext, onPrev }: any) => {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold">약관 동의</h2>

      <FormField name="terms" control={form.control}>
        {(field, state) => (
          <FormItem error={state.error?.message}>
            <Checkbox
              id="terms"
              label="이용약관 및 개인정보 처리방침에 동의합니다."
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          </FormItem>
        )}
      </FormField>

      <div className="flex justify-between">
        <Button onClick={onPrev} variant="secondary">
          이전
        </Button>

        <Button onClick={onNext} full>
          다음 단계
        </Button>
      </div>
    </div>
  );
};
