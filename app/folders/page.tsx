"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, X } from "lucide-react";
import { useState } from "react";

import DashboardShell from "@/components/DashboardShell";

export default function FoldersPage() {
  const [folders, setFolders] = useState([
    {
      id: 1,
      title: "MTH 202",
      description:
        "Limits, differentiation, integration notes, and solved examples.",
    },
    {
      id: 2,
      title: "React practice projects",
      description:
        "Mini apps, components, hooks practice, and UI experiments.",
    },
    {
      id: 3,
      title: "CSC 212",
      description:
        "Programming exercises, coding tasks, and submission deadlines.",
    },
    {
      id: 4,
      title: "Javascript coding challenges",
      description:
        "Beginner scripts, logic problems, and debugging exercises.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [newFolderName, setNewFolderName] =
    useState("");

  const [
    newFolderDescription,
    setNewFolderDescription,
  ] = useState("");

  const handleCreateFolder = () => {
    if (!newFolderName.trim()) return;

    const newFolder = {
      id: Date.now(),
      title: newFolderName,
      description: newFolderDescription,
    };

    setFolders((prev) => [
      ...prev,
      newFolder,
    ]);

    setNewFolderName("");
    setNewFolderDescription("");

    setIsModalOpen(false);
  };

  return (
    <DashboardShell>
      <section>
        {/* PAGE HEADER */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#151C27]">
            Folders
          </h1>

          <p className="mt-2 text-lg text-[#6B7280]">
            Organize your academic files,
            assignments, and study materials
            in one place.
          </p>
        </div>

        {/* FOLDER GRID */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {folders.map((folder) => (
            <Link
              key={folder.id}
              href={`/folders/${folder.id}`}
            >
              <article className="group cursor-pointer transition-all duration-300 hover:-translate-y-1">
                {/* SVG ICON */}
                <Image
                  src="/icons/folder-icon.svg"
                  alt="Folder"
                  width={150}
                  height={150}
                  className="transition-transform duration-300 group-hover:scale-105"
                />

                {/* CONTENT */}
                <div className="mt-5 max-w-[240px]">
                  <h2 className="text-2xl font-semibold leading-tight text-[#151C27]">
                    {folder.title}
                  </h2>

                  <p className="mt-3 text-base leading-7 text-[#6B7280]">
                    {folder.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* FLOATING ACTION BUTTON */}
        <button
          type="button"
          aria-label="Create new folder"
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-10 right-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#A46BF5] text-white shadow-xl transition hover:scale-105 hover:bg-[#8B5CF6]"
        >
          <Plus size={40} strokeWidth={2.5} />
        </button>

        {/* MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-[32px] bg-white p-8 shadow-2xl">
              {/* HEADER */}
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#151C27]">
                  Create Folder
                </h2>

                <button
                  type="button"
                  onClick={() =>
                    setIsModalOpen(false)
                  }
                  className="text-neutral-500 transition hover:text-black"
                >
                  <X size={28} />
                </button>
              </div>

              {/* FOLDER NAME */}
              <div>
                <label
                  htmlFor="folder-name"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  Folder name
                </label>

                <input
                  id="folder-name"
                  type="text"
                  placeholder="Enter folder name"
                  value={newFolderName}
                  onChange={(event) =>
                    setNewFolderName(
                      event.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-neutral-300 px-5 py-4 text-black outline-none transition focus:border-[#A46BF5]"
                />
              </div>

              {/* DESCRIPTION */}
              <div className="mt-5">
                <label
                  htmlFor="folder-description"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  Description
                </label>

                <textarea
                  id="folder-description"
                  placeholder="Enter folder description"
                  value={newFolderDescription}
                  onChange={(event) =>
                    setNewFolderDescription(
                      event.target.value
                    )
                  }
                  className="min-h-[120px] w-full rounded-2xl border border-neutral-300 px-5 py-4 text-black outline-none transition focus:border-[#A46BF5]"
                />
              </div>

              {/* ACTIONS */}
              <div className="mt-8 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setIsModalOpen(false)
                  }
                  className="rounded-2xl border border-neutral-300 px-6 py-3 font-medium transition hover:bg-neutral-100"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleCreateFolder}
                  className="rounded-2xl bg-[#A46BF5] px-6 py-3 font-medium text-white transition hover:bg-[#8B5CF6]"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </DashboardShell>
  );
}