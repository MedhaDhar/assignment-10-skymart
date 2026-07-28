import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Categories({ products }) {
  const navigate = useNavigate();

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <section className="pt-10">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-5xl font-bold">
          Shop by Category
        </h2>

        <button
          onClick={() => navigate("/shop")}
          className="flex items-center gap-2 text-lime-400 hover:gap-3 transition-all"
        >
          View All
          <FiArrowRight />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {categories.map((category) => {
          const count = products.filter(
            (item) => item.category === category
          ).length;

          return (
            <div
              key={category}
              onClick={() =>
                navigate(`/shop?category=${encodeURIComponent(category)}`)
              }
              className="bg-white rounded-[28px] p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-5">
                📦
              </div>

              <h3 className="text-black font-semibold text-2xl capitalize">
                {category}
              </h3>

              <p className="text-zinc-500 mt-2">
                {count} items
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;