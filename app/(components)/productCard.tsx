type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  description: string;
};

const ProductCard = ({ id, name, price, description }: ProductCardProps) => {
  return (
    <a
      href={`/products/${id}`}
      className="flex flex-col rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition"
    >
      <div className="mb-3 h-32 rounded-md bg-zinc-100" />
      <h2 className="text-sm font-semibold">{name}</h2>
      <p className="mt-1 line-clamp-2 text-xs text-zinc-600">{description}</p>
      <p className="mt-3 text-base font-bold">{price.toLocaleString()}원</p>
    </a>
  );
};
export default ProductCard;
