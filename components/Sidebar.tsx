import {
  LayoutDashboard,
  ClipboardList,
  CalendarDays,
  Timer,
  Folder,
  Settings,
  LogOut,
} from "lucide-react";

const navigationItems = [
  {
    id: 1,
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    label: "Task list",
    href: "/tasks",
    icon: ClipboardList,
  },
  {
    id: 3,
    label: "Calendar",
    href: "/calendar",
    icon: CalendarDays,
  },
  {
    id: 4,
    label: "Focus timer",
    href: "/focus-timer",
    icon: Timer,
    active: true,
  },
  {
    id: 5,
    label: "Folders",
    href: "/folders",
    icon: Folder,
  },
];

export default function Sidebar() {
  return (
    <aside
      className="flex h-screen w-64 flex-col justify-between border-r border-purple-100 bg-[#F6EFFA] px-5 py-8"
      aria-label="Sidebar navigation"
    >
      {/* TOP SECTION */}
      <div>
        {/* LOGO */}
        <div className="mb-14 flex items-center gap-3">
          <img src="/logo.svg" alt="TaskPilot Logo" className="h-12 w-12" />
          <div>
            
            <h1 className="text-3xl font-bold text-neutral-900">
              TaskPilot
            </h1>

            <p className="text-sm text-neutral-500">
              Student task manager
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav>
          <ul className="space-y-3">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={item.active ? "page" : undefined}
                    className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-colors duration-200 ${
                      item.active
                        ? "bg-[#A46BF5] text-white shadow-md"
                        : "text-neutral-800 hover:bg-[#EBDDFA]"
                    }`}
                  >
                    <Icon size={22} />

                    <span className="font-medium">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* BOTTOM SECTION */}
      <div className="space-y-3">
        <a
          href="/settings"
          className="flex items-center gap-4 rounded-xl px-4 py-3 text-neutral-800 transition-colors duration-200 hover:bg-[#EBDDFA]"
        >
          <Settings size={22} />

          <span className="font-medium">Settings</span>
        </a>

        <button
          type="button"
          className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-neutral-500 transition-colors duration-200 hover:bg-red-50 hover:text-red-500"
        >
          <LogOut size={22} />

          <span className="font-medium">Log out</span>
        </button>
      </div>
    </aside>
  );
}