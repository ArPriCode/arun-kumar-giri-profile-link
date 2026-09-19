import { PlatformMark } from "@/components/platform-mark";
import { type ProfileGroup, profilesByGroup } from "@/lib/profiles";

export function ProfileGrid({ group }: { group: ProfileGroup }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {profilesByGroup(group).map((profile) => (
        <li key={profile.href}>
          <a
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white/90 px-4 py-3 shadow-sm hover:border-zinc-400"
          >
            <PlatformMark name={profile.name} />
            <span className="min-w-0">
              <span className="block text-sm font-medium text-zinc-900">
                {profile.name}
              </span>
              <span className="block truncate text-xs text-zinc-500">
                {profile.note}
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
