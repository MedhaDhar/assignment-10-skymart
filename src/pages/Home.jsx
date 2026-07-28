import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Footer from "../components/Footer";
import useProducts from "../hooks/useProducts";

import { FiStar, FiZap } from "react-icons/fi";

function Home() {
  const { products, loading } = useProducts();

  const topRated = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const newArrivals = [...products]
    .slice(-5)
    .reverse();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#0A0A0A] text-white pt-6">

        <div className="max-w-[1450px] mx-auto px-8 lg:px-12 pb-24 flex flex-col gap-24">

          {/* Hero */}
          <section className="mb-20">
            <Hero />
          </section>

          {/* Categories */}
          <section className="mb-20">
            <Categories products={products} />
          </section>

          {/* Top Rated + New Arrivals */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-10">

              <ProductShowcase
                title="Top Rated"
                icon={<FiStar className="text-yellow-500" />}
                products={topRated}
              />

              <ProductShowcase
                title="New Arrivals"
                icon={<FiZap className="text-lime-500" />}
                products={newArrivals}
              />

            </div>
          </section>

          {/* Features */}
          <section className="mb-20">
            <Features />
          </section>

        </div>

        <Footer />

      </div>
    </>
  );
}

export default Home;