import Home from "./Experience";
import Experience from "./Home";

export default function Hero() {
  return (
    <section className="flex-1 bg-neonGreen rounded-l-[40px] flex flex-col justify-center p-20 relative">
      {/* <p className="text-black/80 tracking-[0.2em] text-xl mb-6">WELCOME TO NEXTCONF</p>
      <h1 className="text-[8rem] leading-[7rem] font-extrabold text-white uppercase">
        Unlock
        <br />
        Possibility
        <br />
        With No
        <br />
        Code
      </h1> */}
      <Home />
      <Experience />

      <button className="absolute bottom-10 right-10 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold px-8 py-4 rounded-full flex items-center gap-2">
        <span className="text-2xl">∞</span> MORE TEMPLATE
      </button>
    </section>
  );
}
