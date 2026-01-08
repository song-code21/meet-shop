import ProductCard from "../(components)/productCard";

const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "한우 등심 1++",
    price: 42000,
    description: "구이용 300g 포장",
  },
  {
    id: "2",
    name: "국내산 삼겹살",
    price: 16800,
    description: "구이/수육 겸용",
  },
];

const DealsPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold">반짝특가</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {MOCK_PRODUCTS.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
};
export default DealsPage;
