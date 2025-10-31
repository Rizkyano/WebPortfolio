import Home from "./Home";
import Experience from "./Experience";

export default function Hero() {
  return (
    <section className="flex-1 bg-neonGreen rounded-l-[40px] flex flex-col justify-center py-10 px-5 relative">
      <Home />
      <Experience />
      <button className="absolute bottom-10 right-10 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold px-8 py-4 rounded-full flex items-center gap-2">
        <span className="text-2xl">∞</span> MORE TEMPLATE
      </button>
    </section>
  );
}
