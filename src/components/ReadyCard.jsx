const ReadyCard = ({ order, handleReayItemRemove }) => {
  return (
    <div className="border-1 border-amber-400 p-5 rounded-2xl space-y-2">
      <h2 className="text-xl font-semibold text-green-400">
        {order.order_title}
      </h2>
      <p>Table: {order.table_no}</p>
      <p>Waiter ID: {order.waiterId}</p>
      <p>Cooking Time: {order.cookedTime}</p>
      <div className="flex justify-end">
        <span
          onClick={() => handleReayItemRemove(order)}
          className="text-xs cursor-pointer opacity-60"
        >
          Remove
        </span>
      </div>
    </div>
  );
};

export default ReadyCard;
