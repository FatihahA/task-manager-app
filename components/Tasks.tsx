import { Plus } from "lucide-react";

const focusTasks = [
  {
    id: 1,
    title: "React nav bar component",
    due: "2 days",
  },
  {
    id: 2,
    title: "React nav bar component",
    due: "2 days",
  },
  {
    id: 3,
    title: "React nav bar component",
    due: "2 days",
  },
  {
    id: 4,
    title: "React nav bar component",
    due: "2 days",
  },
];

export default function FocusTasks() {
  return (
    <aside className="rounded-[32px] border border-purple-100 bg-[#F4ECF8] p-8 shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
      <h2 className="mb-6 text-2xl font-semibold text-neutral-900">
        Focus on
      </h2>

      <div className="space-y-4">
        {focusTasks.map((task) => (
          <article
            key={task.id}
            className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4"
          >
            <input
              type="checkbox"
              className="h-7 w-7 rounded-md border-2 border-black accent-[#A46BF5]"
            />

            <div>
              <h3 className="font-medium text-neutral-900">
                {task.title}
              </h3>

              <p className="text-sm text-neutral-400">
                Due in{" "}
                <span className="font-semibold text-red-500">
                  {task.due}
                </span>
              </p>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-white py-4 font-medium text-neutral-800 transition hover:bg-[#EBDDFA]"
      >
        <Plus size={22} />
        Select another task
      </button>
    </aside>
    );
}