import {
  CloudRain,
  Trees,
  Waves,
} from "lucide-react";

const ambientSounds = [
  {
    id: 1,
    label: "Rainfall",
    icon: CloudRain,
    active: true,
  },
  {
    id: 2,
    label: "White noise",
    icon: Waves,
  },
  {
    id: 3,
    label: "Waves",
    icon: Waves,
  },
  {
    id: 4,
    label: "Forest",
    icon: Trees,
  },
];

export default function AmbientSoundsPanel() {
  return (
    <section
      aria-label="Ambient sounds"
      className="flex flex-wrap gap-6"
    >
      {ambientSounds.map((sound) => {
        const Icon = sound.icon;

        return (
          <button
            key={sound.id}
            type="button"
            className={`flex h-40 w-40 flex-col items-center justify-center rounded-[28px] border border-purple-100 shadow-sm transition ${
              sound.active
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