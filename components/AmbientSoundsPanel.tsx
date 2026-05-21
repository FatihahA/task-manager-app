"use client";

import { useEffect, useRef, useState } from "react";

import {
  CloudRain,
  Trees,
  Waves,
  AudioLines,
} from "lucide-react";

const ambientSounds = [
  {
    id: 1,
    label: "Rainfall",
    icon: CloudRain,
    src: "/sounds/rainfall.mp3",
  },
  {
    id: 2,
    label: "White noise",
    icon: AudioLines,
    src: "/sounds/whiteNoise.mp3",
  },
  {
    id: 3,
    label: "Waves",
    icon: Waves,
    src: "/sounds/waves.mp3",
  },
  {
    id: 4,
    label: "Forest",
    icon: Trees,
    src: "/sounds/forestambience.mp3",
  },
];

export default function AmbientSoundsPanel() {
  const [activeSoundId, setActiveSoundId] =
    useState<number | null>(null);

  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  const handleSoundSelect = (
    id: number,
    src: string
  ) => {
    if (activeSoundId === id) {
      audioRef.current?.pause();

      setActiveSoundId(null);

      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(src);

    audio.loop = true;
    audio.volume = 0.5;

    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });

    audioRef.current = audio;

    setActiveSoundId(id);
  };

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <section
      aria-label="Ambient sounds"
      className="flex flex-wrap gap-6"
    >
      {ambientSounds.map((sound) => {
        const Icon = sound.icon;

        const isActive =
          activeSoundId === sound.id;

        return (
          <button
            key={sound.id}
            type="button"
            onClick={() =>
              handleSoundSelect(sound.id, sound.src)
            }
            className={`flex h-40 w-40 flex-col items-center justify-center rounded-[28px] border border-purple-100 shadow-sm transition ${
              isActive
                ? "bg-[#A46BF5] text-white"
                : "bg-[#F4ECF8] text-[#9B6AF3] hover:bg-[#EBDDFA]"
            }`}
          >
            <Icon size={38} />

            <span className="mt-5 text-lg font-medium">
              {sound.label}
            </span>
          </button>
        );
      })}
    </section>
  );
}