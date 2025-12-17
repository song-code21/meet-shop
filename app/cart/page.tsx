const MOCK_CART = [{ id: "1", name: "한우 등심", price: 42000, quantity: 1 }];

const CartPage = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">장바구니</h1>

      {MOCK_CART.map((item) => (
        <div
          key={item.id}
          className="flex justify-between p-2 bg-white rounded mb-2"
        >
          <span>{item.name}</span>
          <span>{item.price.toLocaleString()}원</span>
        </div>
      ))}

      <button className="mt-4 bg-zinc-900 text-white px-4 py-2 rounded-lg">
        주문하기
      </button>
    </div>
  );
};
export default CartPage;
