"use client";

import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-[#EEE7FA]">
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT: form */}
        <section className="relative px-6 sm:px-10 lg:px-16 py-10 lg:py-14 flex items-center">
          <div className="w-full max-w-[460px]">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative w-10 h-10 rounded-xl bg-white border border-[#DDD5EE] flex items-center justify-center overflow-hidden">
                <Image
                  src="/taskp_logo.svg"
                  alt="TaskPilot logo"
                  width={28}
                  height={28}
                />
              </span>
              <span className="text-[20px] font-semibold text-[#7C3AED]">
                TaskPilot
              </span>
            </Link>

            <h1 className="mt-10 text-[36px] sm:text-[40px] leading-tight font-semibold text-[#151C27]">
              Create your account
              <br />
              and start focusing.
            </h1>
            <p className="mt-2 text-[16px] text-[#6B7280]">
              TaskPilot helps you plan tasks, build study momentum, and stay on
              track—without the chaos.
            </p>

            <form
              className="mt-10 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                // UI-only for now
                window.location.href = "/login";
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-[13px] font-semibold text-[#374151]"
                >
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-2 w-full rounded-xl border border-[#DDD5EE] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                  autoComplete="name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[13px] font-semibold text-[#374151]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="mt-2 w-full rounded-xl border border-[#DDD5EE] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                  autoComplete="email"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-[13px] font-semibold text-[#374151]"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-xl border border-[#DDD5EE] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                  autoComplete="new-password"
                />
                <p className="mt-2 text-[12px] text-[#6B7280]">
                  Password must be at least 6 characters.
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#7C3AED] py-3.5 text-white font-semibold text-[15px] hover:opacity-95 active:opacity-90 transition"
              >
                Create free account
              </button>

              <p className="text-[12px] text-[#9CA3AF] leading-relaxed">
                By creating an account, you agree to our{" "}
                <a href="#" className="underline underline-offset-4">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="underline underline-offset-4">
                  Privacy Policy
                </a>
                .
              </p>

              <div className="text-center text-[14px] text-[#6B7280]">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-[#7C3AED] hover:underline"
                >
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </section>

        {/* RIGHT: big message + floating task/clock design */}
        <section className="relative overflow-hidden px-6 sm:px-10 lg:px-16 py-10 lg:py-14 flex items-center justify-center">
          {/* floating design layer */}
          <div className="pointer-events-none absolute inset-0">
            {/* flying paper sheets (instead of checklist cards) */}
            <div className="absolute top-10 right-20 rotate-[14deg] hidden md:block">
              <div className="relative w-60 h-40">
                <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-white border border-[#7C3AED]/15 shadow-sm" />
                <div className="absolute inset-0 rounded-2xl bg-white border border-[#7C3AED]/20 shadow-sm overflow-hidden">
                  {/* fold */}
                  <div className="absolute right-0 top-0 w-0 h-0 border-l-[22px] border-l-transparent border-t-[22px] border-t-[#7C3AED]/10" />
                  {/* content */}
                  <div className="p-5">
                    <div className="text-[12px] font-semibold text-[#7C3AED]">
                      Today
                    </div>
                    <div className="mt-3 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded border border-[#7C3AED]/30" />
                        <div className="h-[8px] w-36 bg-[#7C3AED]/15 rounded" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded border border-[#7C3AED]/30 bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED]/70 text-[11px] leading-none">
                          ✓
                        </div>
                        <div className="h-[8px] w-44 bg-[#7C3AED]/12 rounded line-through opacity-60" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded border border-[#7C3AED]/30" />
                        <div className="h-[8px] w-40 bg-[#7C3AED]/12 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 right-40 rotate-[-10deg] hidden lg:block">
              <div className="relative w-56 h-36">
                <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-white border border-[#7C3AED]/15 shadow-sm" />
                <div className="absolute inset-0 rounded-2xl bg-white border border-[#7C3AED]/20 shadow-sm overflow-hidden">
                  <div className="absolute right-0 top-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#7C3AED]/10" />
                  <div className="p-5">
                    <div className="text-[12px] font-semibold text-[#7C3AED]">
                      Next up
                    </div>
                    <div className="mt-3 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded border border-[#7C3AED]/30" />
                        <div className="h-[8px] w-40 bg-[#7C3AED]/12 rounded" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded border border-[#7C3AED]/30 bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED]/70 text-[11px] leading-none">
                          ✓
                        </div>
                        <div className="h-[8px] w-32 bg-[#7C3AED]/12 rounded line-through opacity-60" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded border border-[#7C3AED]/30" />
                        <div className="h-[8px] w-36 bg-[#7C3AED]/12 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* focus timer ring (replaces clock) */}
            <div className="absolute top-1/2 left-16 -translate-y-1/2 w-44 h-44 rounded-full border-2 border-[#7C3AED]/18 bg-white hidden lg:block" />
            <div className="absolute top-1/2 left-16 -translate-y-1/2 w-44 h-44 rounded-full hidden lg:block">
              <div className="absolute inset-5 rounded-full border-2 border-[#7C3AED]/12" />
              <div className="absolute inset-9 rounded-full border-2 border-[#7C3AED]/10" />
              <div className="absolute left-1/2 top-2 w-2.5 h-2.5 bg-[#7C3AED]/18 rounded-full -translate-x-1/2" />
              <div className="absolute inset-x-0 top-[62%] text-center text-[10px] tracking-wide text-[#7C3AED] opacity-70">
                Task o&apos;clock
              </div>
            </div>
          </div>

          {/* big write-up */}
          <div className="relative w-full max-w-[520px]">
            <div className="text-[#151C27] font-extrabold leading-[0.95] tracking-tight">
              <div className="text-[56px] sm:text-[72px]">Create</div>
              <div className="text-[56px] sm:text-[72px]">
                calm
                <span className="text-[#7C3AED]">.</span>
              </div>
              <div className="text-[56px] sm:text-[72px]">progress</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
