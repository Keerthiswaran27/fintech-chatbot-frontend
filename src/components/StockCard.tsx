export default function StockCard({ symbol, price }: any) {

  return (
    <div className="bg-gray-800 rounded-xl p-4 w-fit shadow-lg">

      <div className="text-gray-400 text-sm">
        Stock Price
      </div>

      <div className="text-xl font-bold">
        {symbol}
      </div>

      <div className="text-3xl font-bold mt-1">
        ₹{price}
      </div>

    </div>
  );

}