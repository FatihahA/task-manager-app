import {
  Bell,
  HelpCircle,
  Search,
  UserCircle2,
} from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-purple-100 bg-[#F6EFFA] px-10 py-6 shadow-sm">
      <div className="relative w-full max-w-2xl">
        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-500"
        />

        <input
          type="text"
          placeholder="Search"
          className="h-12 w-full rounded-full bg-[#DCC9EB] pl-14 pr-5 outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-[#A46BF5]"
        />
      </div>

      <div className="ml-8 flex items-center gap-6">
        <button
          type="button"
          className="text-neutral-700 transition hover:text-[#8B5CF6]"
        >
          <Bell size={22} />
        </button>

        <button
          type="button"
          className="text-neutral-700 transition hover:text-[#8B5CF6]"
        >
          <HelpCircle size={22} />
        </button>

        <button
          type="button"
          className="text-neutral-700 transition hover:text-[#8B5CF6]"
        >
          <UserCircle2 size={28} />
        </button>
      </div>
    </header>
  );
}