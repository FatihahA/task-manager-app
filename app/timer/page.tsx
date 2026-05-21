"use client";
import {useState} from "react";

import AmbientSoundsPanel from "@/components/AmbientSoundsPanel";
import FocusTasks from "@/components/Tasks";
import Header from "@/components/Header";
import SoundSettingsPanel from "@/components/SoundSettingsPanel";
import Sidebar from "@/components/Sidebar";
import TimerCard from "@/components/TimerCard";

export default function Page() {
  
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [autoStartBreaks, setAutoStartBreaks] =
  useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 overflow-y-auto bg-[#F3EAF8]">
        <Header />

        <section className="grid grid-cols-[1fr_360px] gap-8 p-10">
          <div className="space-y-8">
            <TimerCard 
            currentTask="Create react nav bar component"
            focusDuration={focusDuration}
            breakDuration={breakDuration}
            autoStartBreaks={autoStartBreaks}
             />

            <AmbientSoundsPanel />
          </div>

          <div className="space-y-8">
            <FocusTasks />

            <SoundSettingsPanel
              focusDuration={focusDuration}
              breakDuration={breakDuration}
              setFocusDuration={setFocusDuration}
              setBreakDuration={setBreakDuration}
              autoStartBreaks={autoStartBreaks}
              setAutoStartBreaks={setAutoStartBreaks}
              />
          </div>
        </section>
      </main>
    </div>
  );
}