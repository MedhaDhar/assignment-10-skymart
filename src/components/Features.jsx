import { FiZap, FiShield, FiTag } from "react-icons/fi";

function Features() {
  const features = [
    {
      icon: <FiZap className="text-lime-400 text-4xl" />,
      title: "Fast Delivery",
      description: "Same-day on select items",
    },
    {
      icon: <FiShield className="text-blue-400 text-4xl" />,
      title: "Secure Payments",
      description: "100% encrypted checkout",
    },
    {
      icon: <FiTag className="text-green-400 text-4xl" />,
      title: "Best Prices",
      description: "Price-match guarantee",
    },
  ];

  return (
    <section className="pt-12 pb-10">

      <div className="grid md:grid-cols-3 gap-10">

        {features.map((feature, index) => (

          <div
            key={index}
            className="border border-zinc-700 rounded-[30px] p-8 flex items-center gap-6 hover:border-lime-400 hover:-translate-y-2 transition-all duration-300"
          >

            <div>

              {feature.icon}

            </div>

            <div>

              <h3 className="text-2xl font-semibold text-white">

                {feature.title}

              </h3>

              <p className="text-zinc-400 mt-2">

                {feature.description}

              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;