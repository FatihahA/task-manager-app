"use client";
import { SlidersHorizontal } from "lucide-react";

type SoundSettingsPanelProps = {
  focusDuration: number;
  breakDuration: number;
  setFocusDuration: React.Dispatch<React.SetStateAction<number>>;
  setBreakDuration: React.Dispatch<React.SetStateAction<number>>;
  autoStartBreaks: boolean;
  setAutoStartBreaks: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SoundSettingsPanel({
  focusDuration,
  breakDuration,
  setFocusDuration,
  setBreakDuration,
  autoStartBreaks,
  setAutoStartBreaks,
}: SoundSettingsPanelProps) {
  return (
    <aside className="rounded-[32px] border border-purple-100 bg-[#F4ECF8] p-8 shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Settings
        </h2>

        <SlidersHorizontal
          size={24}
          className="text-neutral-500"
        />
      </div>

      {/* SETTINGS CONTENT */}
      <div className="space-y-8">
        {/* FOCUS DURATION */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-neutral-700">
            Focus duration
          </span>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setFocusDuration((prev) =>
                  Math.max(1, prev - 1)
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-[#8B5CF6] shadow-sm transition hover:bg-[#EBDDFA]"
            >
              -
            </button>

            <span className="min-w-[60px] text-center text-lg font-semibold text-[#8B5CF6]">
              {focusDuration}m
            </span>

            <button
              type="button"
              onClick={() =>
                setFocusDuration((prev) => prev + 1)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-[#8B5CF6] shadow-sm transition hover:bg-[#EBDDFA]"
            >
              +
            </button>
          </div>
        </div>

        {/* BREAK DURATION */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-neutral-700">
            Break duration
          </span>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setBreakDuration((prev) =>
                  Math.max(1, prev - 1)
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-[#8B5CF6] shadow-sm transition hover:bg-[#EBDDFA]"
            >
              -
            </button>

            <span className="min-w-[60px] text-center text-lg font-semibold text-[#8B5CF6]">
              {breakDuration}m
            </span>

            <button
              type="button"
              onClick={() =>
                setBreakDuration((prev) => prev + 1)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-[#8B5CF6] shadow-sm transition hover:bg-[#EBDDFA]"
            >
              +
            </button>
          </div>
        </div>

        {/* AUTO START TOGGLE */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-neutral-700">
            Auto-start breaks
          </span>

          <button
            type="button"
            onClick={() =>
              setAutoStartBreaks((prev) => !prev)
            }
            aria-label="Toggle auto-start breaks"
            className={`relative h-10 w-16 rounded-full transition ${
              autoStartBreaks
                ? "bg-[#A46BF5]"
                : "bg-neutral-400"
            }`}
          >
            <span
              className={`absolute left-1 top-1 h-8 w-8 rounded-full bg-white transition-transform duration-300 ${
                autoStartBreaks
                  ? "translate-x-6"
                  : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </aside>
  );
}