import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function Hero() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const hour = new Date().getHours();

  let greeting = "GOOD MORNING";

  if (hour >= 12 && hour < 17) greeting = "GOOD AFTERNOON";
  if (hour >= 17) greeting = "GOOD EVENING";

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-zinc-1000 bg-[#0D0D0D] px-14 py-12 mt-10">

      {/* Grid Background */}

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg,#333 1px,transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="relative z-10 grid lg:grid-cols-[1.6fr_0.6fr] items-center gap-10">

        {/* LEFT */}

        <div>

          <p className="uppercase tracking-[5px] text-lime-400 text-sm font-semibold mb-5">
            {greeting} 👋
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold leading-[1.05]">
            Welcome back,
            <br />
            <span className="text-lime-400">
              {user?.name?.split(" ")[0] || "Guest"}!
            </span>
          </h1>

          <p className="text-zinc-400 text-lg leading-9 max-w-2xl mt-8">
            Discover today's picks — hand-curated products across
            electronics, fashion and more.
          </p>

          <div className="flex items-center gap-5 mt-10">

            {/* Shop Now */}

            <button
              onClick={() => navigate("/shop")}
              className="bg-lime-400 hover:bg-lime-300 transition text-black font-semibold px-8 py-4 rounded-2xl flex items-center gap-3"
            >
              Shop Now
              <FiArrowRight className="text-xl" />
            </button>

            {/* View All */}

            <button
              onClick={() => navigate("/shop")}
              className="border border-zinc-700 hover:border-lime-400 hover:text-lime-400 transition px-7 py-3.5 rounded-2xl"
            >
              View All Products
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex flex-col items-center lg:items-end pr-8 gap-5">

          <div className="w-[210px] rounded-[28px] border border-lime-500/20 bg-lime-500/10 px-8 py-7 text-center">
            <h2 className="text-6xl font-bold text-lime-400">
              20+
            </h2>

            <p className="text-zinc-400 mt-2">
              Products Available
            </p>
          </div>

          <div className="w-[190px] rounded-[28px] border border-zinc-700 px-6 py-6 text-center">
            <h2 className="text-5xl font-bold">
              Free
            </h2>

            <p className="text-zinc-400 mt-2">
              Delivery on ₹999+
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;