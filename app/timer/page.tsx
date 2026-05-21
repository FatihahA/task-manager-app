"use client";

import { useState } from "react";

import AmbientSoundsPanel from "@/components/AmbientSoundsPanel";
import DashboardShell from "@/components/DashboardShell";
import FocusTasks from "@/components/Tasks";
import SoundSettingsPanel from "@/components/SoundSettingsPanel";
import TimerCard from "@/components/TimerCard";

export default function Page() {
  const [focusDuration, setFocusDuration] =
    useState(25);

  const [breakDuration, setBreakDuration] =
    useState(5);

  const [autoStartBreaks, setAutoStartBreaks] =
    useState(false);

  return (
    <DashboardShell>
      <section className="grid grid-cols-[1fr_360px] gap-8">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <TimerCard
            currentTask="Create react nav bar component"
            focusDuration={focusDuration}
            breakDuration={breakDuration}
            autoStartBreaks={autoStartBreaks}
          />

          <AmbientSoundsPanel />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          <FocusTasks />

          <SoundSettingsPanel
            focusDuration={focusDuration}
            breakDuration={breakDuration}
            setFocusDuration={setFocusDuration}
            setBreakDuration={setBreakDuration}
            autoStartBreaks={autoStartBreaks}
            setAutoStartBreaks={
              setAutoStartBreaks
            }
          />
        </div>
      </section>
    </DashboardShell>
  );
}