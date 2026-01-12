import Input from "./Input";
type SearchProps = {
  label?: string;
  error?: string;
  success?: boolean;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  full?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

const Search = ({ label, error, success, size, disabled }: SearchProps) => {
  return (
    <form className="flex">
      <Input
        type="text"
        placeholder="원하시는 상품을 검색하세요"
        className="w-full rounded-lg border border-zinc-300 px-4 py-2 pl-10 text-sm focus:border-red-500 focus:outline-none"
      />
      <button className="absolute top-2 right-2">🔍</button>
    </form>
  );
};

export default Search;
