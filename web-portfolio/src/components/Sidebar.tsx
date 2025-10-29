import { ArrowUpRight } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 bg-purple text-white w-[320px] h-screen flex flex-col justify-between rounded-r-[40px] p-10">
      <div>
        {/* Logo */}
        <div className="flex items-center mb-16">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <div className="w-7 h-7 bg-purple rounded-full" />
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-8 text-3xl font-extrabold tracking-tight">
          <a href="#" className="block border-b border-white/30 pb-2">
            ABOUT
          </a>
          <a href="#" className="block border-b border-white/30 pb-2">
            EVENTS
          </a>
          <a href="#" className="block border-b border-white/30 pb-2">
            TESTIMONIAL
          </a>
          <a href="#" className="block border-b border-white/30 pb-2">
            CONTACT
          </a>
        </nav>
      </div>

      {/* Button */}
      <button className="bg-neonGreen text-black font-extrabold text-xl rounded-md py-4 flex justify-between items-center px-6 mt-12">
        JOIN NEXT MEETUP
        <ArrowUpRight className="w-6 h-6" />
      </button>
    </aside>
  );
}
