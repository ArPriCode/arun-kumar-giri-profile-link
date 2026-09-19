import type { PlatformName } from "@/lib/profiles";

export function PlatformMark({ name }: { name: PlatformName }) {
  const className = "h-5 w-5 shrink-0";

  switch (name) {
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
          />
        </svg>
      );
    case "LeetCode":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path
            fill="#FFA116"
            d="M16.2 3.4 8.1 8.1a4.4 4.4 0 0 0 0 7.8l8.1 4.7 1.6-2.7-8.1-4.7a1.5 1.5 0 0 1 0-2.6l8.1-4.7-1.6-2.5Z"
          />
          <rect x="13.6" y="11" width="8" height="2" rx="0.6" fill="#111" />
        </svg>
      );
    case "Codeforces":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect x="4" y="10" width="4" height="10" rx="1" fill="#1F8ACB" />
          <rect x="10" y="4" width="4" height="16" rx="1" fill="#F44336" />
          <rect x="16" y="8" width="4" height="12" rx="1" fill="#FFC107" />
        </svg>
      );
    case "GeeksforGeeks":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="9" fill="#2F8D46" />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            fill="white"
          >
            G
          </text>
        </svg>
      );
    case "CodeChef":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="9" fill="#5B4638" />
          <path
            fill="#F8C14C"
            d="M8 14c1.2 2 6.8 2 8 0-.8 2.8-7.2 2.8-8 0Z"
          />
        </svg>
      );
    case "TensorTonic":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect width="24" height="24" rx="6" fill="#111" />
          <path fill="#7C5CFF" d="M6 7h12v2.2H13.4V17h-2.8V9.2H6z" />
        </svg>
      );
    case "Deep-ML":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect width="24" height="24" rx="6" fill="#0B3D91" />
          <circle cx="8" cy="12" r="2" fill="#7DD3FC" />
          <circle cx="16" cy="8" r="1.6" fill="#FDE047" />
          <circle cx="16" cy="16" r="1.6" fill="#FDE047" />
          <path stroke="#7DD3FC" strokeWidth="1.4" d="M10 12h4.2M14.2 8.8v6.4" />
        </svg>
      );
    case "Kaggle":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path
            fill="#20BEFF"
            d="M6.4 4.2h3.2v6.3L14.8 4.2h3.7l-6.2 7.1 6.7 8.5h-3.8l-4.9-6.4-1.7 1.9v4.5H6.4z"
          />
        </svg>
      );
    case "Hugging Face":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="9" fill="#FFD21E" />
          <circle cx="9" cy="11" r="1.1" fill="#111" />
          <circle cx="15" cy="11" r="1.1" fill="#111" />
          <path
            d="M8.4 14.4c1.1 1.4 6.1 1.4 7.2 0"
            fill="none"
            stroke="#111"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "DrivenData":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect width="24" height="24" rx="6" fill="#0EA5A0" />
          <path fill="white" d="M7 7h6.2a4.5 4.5 0 0 1 0 9H7V7zm2.2 2.1v4.8H13a2.4 2.4 0 0 0 0-4.8H9.2z" />
        </svg>
      );
    case "HackerEarth":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect width="24" height="24" rx="6" fill="#2C3454" />
          <path fill="#32C766" d="M7 7h2.2v4H15V7H17.2v10H15v-4H9.2v4H7z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect width="24" height="24" rx="4" fill="#0A66C2" />
          <path
            fill="white"
            d="M7.2 9.3H9.6V17H7.2zM8.4 6.2a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8ZM11 9.3h2.3v1.05h.03c.32-.6 1.1-1.23 2.27-1.23 2.43 0 2.88 1.6 2.88 3.67V17H16.2v-3.4c0-.81-.02-1.85-1.13-1.85-1.13 0-1.3.88-1.3 1.79V17H11z"
          />
        </svg>
      );
    case "Medium":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="7" cy="12" r="4.2" fill="#111" />
          <ellipse cx="15.2" cy="12" rx="3" ry="4.2" fill="#111" />
          <ellipse cx="20.4" cy="12" rx="1.4" ry="4.2" fill="#111" />
        </svg>
      );
  }
}
