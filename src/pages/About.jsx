import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiShoppingBag, FiShield, FiTruck, FiCode } from "react-icons/fi";

function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#0A0A0A] text-white">

        <div className="max-w-[1400px] mx-auto px-8 py-12">

          {/* Hero */}

          <div className="text-center mb-20">

            <h1 className="text-6xl font-bold">

              About

              <span className="text-lime-400"> SkyMart</span>

            </h1>

            <p className="text-zinc-400 text-xl mt-6 max-w-3xl mx-auto leading-9">

              SkyMart is a modern e-commerce platform built using
              React, Redux Toolkit and TanStack Query. It offers a
              seamless shopping experience with product search,
              filtering, cart management and responsive design.

            </p>

          </div>

          {/* About Card */}

          <div className="bg-[#101010] border border-zinc-800 rounded-[32px] p-12 mb-20">

            <h2 className="text-4xl font-bold mb-6">

              Our Mission

            </h2>

            <p className="text-zinc-400 leading-8 text-lg">

              Our goal is to provide users with a fast, secure and
              enjoyable shopping experience. From discovering products
              to managing the shopping cart, every feature is designed
              with simplicity and performance in mind.

            </p>

          </div>

          {/* Features */}

          <div className="grid md:grid-cols-3 gap-8 mb-20">

            <div className="bg-[#101010] border border-zinc-800 rounded-[30px] p-10 text-center">

              <FiShoppingBag className="text-lime-400 text-5xl mx-auto mb-5" />

              <h3 className="text-2xl font-semibold mb-3">

                Wide Collection

              </h3>

              <p className="text-zinc-400">

                Explore products across multiple categories with an
                intuitive shopping experience.

              </p>

            </div>

            <div className="bg-[#101010] border border-zinc-800 rounded-[30px] p-10 text-center">

              <FiTruck className="text-blue-400 text-5xl mx-auto mb-5" />

              <h3 className="text-2xl font-semibold mb-3">

                Fast Delivery

              </h3>

              <p className="text-zinc-400">

                Quick delivery and smooth checkout to save your time.

              </p>

            </div>

            <div className="bg-[#101010] border border-zinc-800 rounded-[30px] p-10 text-center">

              <FiShield className="text-green-400 text-5xl mx-auto mb-5" />

              <h3 className="text-2xl font-semibold mb-3">

                Secure Shopping

              </h3>

              <p className="text-zinc-400">

                Safe payments and secure user authentication powered
                by Redux Toolkit.

              </p>

            </div>

          </div>

          {/* Tech Stack */}

          <div className="bg-[#101010] border border-zinc-800 rounded-[32px] p-12">

            <div className="flex items-center gap-4 mb-8">

              <FiCode className="text-lime-400 text-4xl" />

              <h2 className="text-4xl font-bold">

                Tech Stack

              </h2>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {[
                "React",
                "Redux Toolkit",
                "TanStack Query",
                "Tailwind CSS",
                "React Router",
                "JavaScript",
                "Vite",
                "DummyJSON API",
              ].map((tech) => (

                <div
                  key={tech}
                  className="bg-black border border-zinc-700 rounded-2xl py-5 text-center"
                >
                  {tech}
                </div>

              ))}

            </div>

          </div>

        </div>

        <Footer />

      </div>
    </>
  );
}

export default About;