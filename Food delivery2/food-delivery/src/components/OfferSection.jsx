
import { Tag } from 'lucide-react';
import { Gift } from 'lucide-react';
import { AlarmClock } from 'lucide-react';
import { CircleArrowRight } from 'lucide-react';
import { FaHotjar } from "react-icons/fa";

const offers = [
  {
    id: 1,
    title: "50% OFF",
    subtitle: "On Your First Order",
    code: "WELCOME50",
    color: "from-orange-500 to-red-500",
    icon: <Gift size={34} />,
  },
  {
    id: 2,
    title: "Free Delivery",
    subtitle: "Above ₹299",
    code: "FREEDEL",
    color: "from-green-500 to-emerald-600",
    icon: <Tag size={34} />,
  },
  {
    id: 3,
    title: "Buy 1 Get 1",
    subtitle: "Selected Restaurants",
    code: "BOGO",
    color: "from-purple-500 to-pink-500",
    icon: <AlarmClock size={34} />,
  },
];

function OfferSection() {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
            <FaHotjar />
               Today's Best Deals
          </span>

          <h2 className="text-5xl font-extrabold mt-5">
            Exclusive <span className="text-orange-500">Offers</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Enjoy exciting discounts, free delivery and exclusive food offers.
          </p>
        </div>

        {/* Offer Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`bg-linear-to-r ${offer.color} rounded-3xl p-8 text-white shadow-xl relative overflow-hidden`}
            >
              <div className="absolute top-5 right-5 bg-white/20 p-3 rounded-full">
                {offer.icon}
              </div>

              <h3 className="text-4xl font-bold mb-2">
                {offer.title}
              </h3>

              <p className="text-lg opacity-90">
                {offer.subtitle}
              </p>

              <div className="mt-8">
                <p className="text-sm opacity-80">
                  Coupon Code
                </p>

                <h4 className="text-2xl font-bold tracking-wider">
                  {offer.code}
                </h4>
              </div>

              <button className="mt-8 flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full font-semibold hover:scale-105 duration-300">
                Order Now
                    <CircleArrowRight size={22} />

              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferSection;