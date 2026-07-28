import { BsLightningChargeFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-16">

      <div className="max-w-[1300px] mx-auto px-10 py-16 text-center">

        <div className="flex items-center justify-center gap-3 mb-5">

          <div className="w-12 h-12 rounded-2xl bg-lime-400 flex items-center justify-center">

            <BsLightningChargeFill className="text-black text-xl" />

          </div>

          <h2 className="text-4xl font-bold text-white">

            Sky

            <span className="text-lime-400">

              Mart

            </span>

          </h2>

        </div>

        <p className="text-zinc-500">

          © 2026 SkyMart • Built with React + Redux Toolkit + TanStack Query

        </p>

      </div>

    </footer>
  );
}

export default Footer;