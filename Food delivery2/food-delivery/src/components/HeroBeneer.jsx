import React from "react";
import { motion } from "framer-motion";
import {
  Gift,
  Flame,
  TicketPercent,
  Bike,
  Clock3,
  ArrowRight,
} from "lucide-react";

const offers = [
  {
    id: 1,
    title: "Festival Offers",
    subtitle: "Celebrate & Save Big",
    description:
      "Enjoy delicious food with amazing festival discounts.",
    discount: "50% OFF",
    code: "FEST50",
    icon: Gift,
    bg: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    title: "Today's Deal",
    subtitle: "Limited Time Deal",
    description:
      "Grab today's hottest food deals before they disappear.",
    discount: "40% OFF",
    code: "TODAY40",
    icon: Flame,
    bg: "from-pink-500 to-orange-500",
  },
  {
    id: 3,
    title: "Exclusive Coupon",
    subtitle: "Extra Savings",
    description:
      "Use our exclusive coupon and save more on your order.",
    discount: "₹150 OFF",
    code: "SAVE150",
    icon: TicketPercent,
    bg: "from-purple-600 to-indigo-600",
  },
  {
    id: 4,
    title: "Free Delivery",
    subtitle: "Order Without Fees",
    description:
      "Get your favorite food delivered with zero delivery charges.",
    discount: "FREE",
    code: "FREEDEL",
    icon: Bike,
    bg: "from-green-500 to-teal-600",
  },
];

const HeroBenee = () => {
  return (
    
    <section className="relative overflow-hidden bg-gray-50 py-20">
      

      {/* Background Effects */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
            <Flame size={18} />
            HOT OFFERS
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Best Deals &{" "}
            <span className="text-orange-500">
              Offers
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Save more on your favorite meals with our exclusive
            food delivery offers and coupons.
          </p>
        </motion.div>

        {/* Offer Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {offers.map((offer, index) => {
            const Icon = offer.icon;

            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all hover:shadow-2xl"
              >

                {/* Card Top */}
                <div
                  className={`relative h-48 bg-linear-to-br ${offer.bg} p-6`}
                >

                  {/* Decorative Circle */}
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />

                  <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10" />

                  {/* Icon */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-md">
                    <Icon size={30} />
                  </div>

                  {/* Text */}
                  <div className="relative mt-5">
                    <p className="text-sm font-medium text-white/80">
                      {offer.subtitle}
                    </p>

                    <h3 className="mt-1 text-3xl font-black text-white">
                      {offer.discount}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">

                  <h3 className="text-xl font-bold text-gray-900">
                    {offer.title}
                  </h3>

                  <p className="mt-2 min-h-18 text-sm leading-6 text-gray-500">
                    {offer.description}
                  </p>

                  {/* Coupon */}
                  <div className="mt-5 flex items-center justify-between rounded-xl border-2 border-dashed border-orange-300 bg-orange-50 px-4 py-3">

                    <div>
                      <p className="text-[10px] font-bold uppercase text-gray-400">
                        Coupon Code
                      </p>

                      <p className="font-extrabold tracking-wider text-orange-600">
                        {offer.code}
                      </p>
                    </div>

                    <TicketPercent
                      size={22}
                      className="text-orange-500"
                    />
                  </div>

                  {/* Button */}
                  <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 font-bold text-white transition-all duration-300 hover:bg-orange-500">
                    Grab Offer

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  {/* Time */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                    <Clock3 size={14} />
                    Limited time offer
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-3xl bg-linear-to-r from-orange-500 to-red-500 p-8 text-center text-white shadow-xl"
        >

          <h3 className="text-2xl font-extrabold sm:text-3xl">
            Hungry? Grab Your Deal! 🔥
          </h3>

          <p className="mt-2 text-white/80">
            Order your favorite food and enjoy amazing discounts.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-orange-600 transition hover:scale-105">
            Order Now
            <ArrowRight size={18} />
          </button>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroBenee;