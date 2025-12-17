import Button from "@/app/(components)/ui/Button";

type ProductPageProps = {
  params: {
    id: string;
  };
};

const ProductDetailPage = ({ params }: ProductPageProps) => {
  const { id } = params;
  return (
    <div className="flex flex-col gap-4">
      <div className="h-64 bg-zinc-200 rounded-lg" />
      <h1 className="text-2xl font-bold">상품 제목 {id}</h1>
      <p>상품 설명</p>
      <p className="text-xl font-bold">42,000원</p>
      <div className="flex justify-end">
        <Button size="lg">장바구니 담기</Button>
      </div>
    </div>
  );
};
export default ProductDetailPage;
