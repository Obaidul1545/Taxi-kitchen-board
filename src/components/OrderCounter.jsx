import { CookingPot, Heater, ScrollText } from 'lucide-react';

const OrderCounter = ({ TotalOrder, TotalCooking, TotalReadyItem }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="border-4 border-dotted border-amber-500 rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{TotalOrder}</h2>
          </div>
        </div>
      </div>
      <div className="border-4 border-dotted border-amber-500 rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Heater className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Currently Cooking
            <h2 className="text-6xl font-bold">{TotalCooking}</h2>
          </div>
        </div>
      </div>
      <div className="border-4 border-dotted border-amber-500 rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CookingPot className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Ready to Serve
            <h2 className="text-6xl font-bold">{TotalReadyItem}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderCounter;
