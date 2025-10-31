import { ArrowUpRight } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0  text-white w-[320px] h-screen flex flex-col justify-between rounded-r-[40px] py-10 px-5">
      <div>
        {/* Menu */}
        <nav className="space-y-8 text-3xl bg-purple-300 font-extrabold tracking-tight rounded-[40px]">
          <div className="flex items-center mb-16">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <div className="w-7 h-7 bg-purple rounded-full" />
            </div>
          </div>
          <a href="#" className="block border-b border-white/30 pb-2">
            ABOUT
          </a>
          <a href="#" className="block border-b border-white/30 pb-2">
            Projects
          </a>
          <a href="#" className="block border-b border-white/30 pb-2">
            Experience
          </a>
          <a href="#" className="block border-b border-white/30 pb-2">
            CONTACT
          </a>
          <button className="bg-neonGreen text-black font-extrabold text-xl rounded-md py-4 flex justify-between items-center px-6 mt-12">
            JOIN NEXT MEETUP
            <ArrowUpRight className="w-6 h-6" />
          </button>
        </nav>
      </div>
    </aside>
  );
}
