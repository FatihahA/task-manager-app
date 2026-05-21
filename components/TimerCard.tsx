"use client";
import { useEffect, useState } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  SkipForward,
} from "lucide-react";

type TimerCardProps = {
  currentTask?: string;
  focusDuration: number;
  breakDuration: number;
  autoStartBreaks: boolean;
};

export default function TimerCard({ currentTask, focusDuration, breakDuration, autoStartBreaks }: TimerCardProps) {

  const [timeLeft, setTimeLeft] = useState(focusDuration * 60);
  const [isRunning, setIsRunning] = useState(false);

  const [mode, setMode] = useState<"focus" | "break">(
    "focus"
  );

  useEffect(() => {
    setTimeLeft(
      (mode === "focus"
        ? focusDuration
        : breakDuration) * 60
    );
  }, [focusDuration, breakDuration, mode]);
  
  useEffect(() => {
        if (!isRunning) return;

        const timer = setInterval(() => {
          setTimeLeft((prev) => {
            if (prev <= 1) {
              const nextMode =
                mode === "focus" ? "break" : "focus";

              setMode(nextMode);

              if (
                nextMode === "break" &&
                !autoStartBreaks
              ) {
                setIsRunning(false);
              }

              return (
                (nextMode === "focus"
                  ? focusDuration
                  : breakDuration) * 60
              );
            }

            return prev - 1;
          });
        }, 1000);

        return () => clearInterval(timer);
        }, [
          isRunning,
          mode,
          focusDuration,
          breakDuration,
          autoStartBreaks,
        ]);


        const handleSkip = () => {
          const nextMode =
            mode === "focus" ? "break" : "focus";

          setMode(nextMode);

          setTimeLeft(
            (nextMode === "focus"
              ? focusDuration
              : breakDuration) * 60
          );
        
          setIsRunning(false);
      }; 

  return (
    <article className="rounded-[36px] border border-purple-100 bg-[#F4ECF8] p-12 shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
      <div className="flex flex-col items-center text-center">
        <div className="mb-10 rounded-full bg-[#E8D5FF] px-6 py-2 text-sm font-semibold text-[#8B5CF6]">
          {mode === "focus"
            ? "🌸 Deep focus session"
            : "☕ Break time"}
        </div>

        <time className="text-[110px] font-medium leading-none tracking-tight text-black">
          {Math.floor(timeLeft / 60)}:
          {String(timeLeft % 60).padStart(2, "0")}
        </time>

        <p className="mt-8 text-lg font-medium text-neutral-800">
          Session 1 of 4 • Working on{" "}
          <span className="font-semibold text-[#8B5CF6]">
            {currentTask || "No task selected"}
          </span>
        </p>

        <div className="mt-12 flex items-center gap-6">
          <button
            type="button"
            onClick={() => {
                setTimeLeft(
                  (mode === "focus"
                    ? focusDuration
                    : breakDuration) * 60
                );
                setIsRunning(false);
            }}
            className="flex h-16 w-16 items-center justify-center rounded-full border border-[#CDB4F8] text-[#9B6AF3] transition hover:bg-[#EBDDFA]"
          >
            <RotateCcw size={28} />
          </button>

          <button
            type="button"
            onClick={() => setIsRunning((prev) => !prev)}
            className="flex h-24 w-24 items-center justify-center rounded-full bg-[#A46BF5] text-white shadow-lg transition hover:scale-105"
          >
            {isRunning ? (
              <Pause
                size={42}
                fill="white"
                className="ml-1"
              />
            ) : (
              <Play
                size={42}
                fill="white"
                className="ml-1"
              />
            )}
          </button>

          <button
            type="button"
            onClick={handleSkip}
            className="flex h-16 w-16 items-center justify-center rounded-full border border-[#CDB4F8] text-[#9B6AF3] transition hover:bg-[#EBDDFA]"
          >
            <SkipForward size={28} />
          </button>
        </div>
      </div>
    </article>
  );
}