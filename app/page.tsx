import Image from "next/image";
import { ProfileGrid } from "@/components/profile-grid";
import { SiteHeader } from "@/components/site-header";
import { person } from "@/lib/profiles";

export default function Home() {
  return (
    <div className="grid-page min-h-full flex flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-5 py-10">
        <section className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <Image
              src="/profile.jpg"
              alt="Arun Kumar Giri at a laptop"
              width={220}
              height={220}
              priority
              className="h-52 w-52 rounded-2xl object-cover ring-1 ring-zinc-200"
            />
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm font-medium text-zinc-500">{person.handle}</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
                {person.name}
              </h1>
              <p className="mt-2 text-zinc-600">
                {person.title} · {person.school} · {person.city}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            DSA
          </h2>
          <ProfileGrid group="dsa" />
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            AI / ML
          </h2>
          <ProfileGrid group="ml" />
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Also
          </h2>
          <ProfileGrid group="home" />
        </section>
      </main>
    </div>
  );
}
