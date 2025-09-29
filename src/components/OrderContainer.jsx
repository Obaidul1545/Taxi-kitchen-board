import { use, useState } from 'react';
import OrderCounter from './OrderCounter';
import CookingCard from './CookingCard';
import OrderCard from './OrderCard';
import ReadyCard from './ReadyCard';
import { toast } from 'react-toastify';

const OrderContainer = ({ promiseData }) => {
  const orderData = use(promiseData);

  const [orders, setOrders] = useState(orderData);

  const [cookingItems, setCookingItems] = useState([]);

  const [readyItems, setReadyItems] = useState([]);

  const handleOrder = (order) => {
    const isExist = cookingItems.find((item) => item.id === order.id);
    if (isExist) {
      toast.warning('Already running Cook!');
      return;
    } else {
      toast.success('Success order!');
    }
    const newCookingItems = [...cookingItems, order];
    setCookingItems(newCookingItems);
  };

  const handleCooking = (order) => {
    order.cookedTime = new Date().toLocaleTimeString();
    console.log(order);
    const newReadyItems = [...readyItems, order];
    setReadyItems(newReadyItems);
    const rimaining = cookingItems.filter((item) => item.id !== order.id);
    setCookingItems(rimaining);

    const removeOderData = orders.filter((item) => item.id !== order.id);
    setOrders(removeOderData);

    toast.success('Cooked!');
  };

  const handleReayItemRemove = (order) => {
    const removeItem = readyItems.filter((item) => item.id !== order.id);
    setReadyItems(removeItem);

    toast.warn('Removed!');
  };

  return (
    <>
      <section className="w-11/12 mx-auto py-5">
        <OrderCounter
          TotalOrder={orders.length}
          TotalCooking={cookingItems.length}
          TotalReadyItem={readyItems.length}
        ></OrderCounter>
      </section>
      <section className="w-11/12 mx-auto py-10 grid  grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          <h2 className="font-bold text-4xl">Currrent Orders</h2>

          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard
                handleOrder={handleOrder}
                key={order.id}
                order={order}
              ></OrderCard>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-5">
          <h2 className="font-bold text-4xl">Cooking Now</h2>
          <div className="shadow p-10 space-y-5">
            {cookingItems.map((order) => (
              <CookingCard
                handleCooking={handleCooking}
                key={order.id}
                order={order}
              ></CookingCard>
            ))}
          </div>
          <h2 className="font-bold text-4xl">Order Ready</h2>
          <div className="shadow p-10 space-y-5">
            {readyItems.map((order) => (
              <ReadyCard
                key={order.id}
                order={order}
                handleReayItemRemove={handleReayItemRemove}
              ></ReadyCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderContainer;
