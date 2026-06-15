"use client";

/** Stylized side-profile car used as a graceful fallback if a photo fails. */
export default function CarMark({
  variant,
  className = "",
}: {
  variant: "before" | "after";
  className?: string;
}) {
  const after = variant === "after";
  const uid = variant;
  return (
    <svg
      viewBox="0 0 800 380"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={after ? "Vetura e riparuar" : "Vetura e dëmtuar"}
    >
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f1eee7" />
        </linearGradient>
        <linearGradient id={`body-${uid}`} x1="0" y1="0" x2="0" y2="1">
          {after ? (
            <>
              <stop offset="0" stopColor="#ffb59a" />
              <stop offset="0.4" stopColor="#ff6a3d" />
              <stop offset="1" stopColor="#d8431a" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#cac4ba" />
              <stop offset="0.5" stopColor="#a39d94" />
              <stop offset="1" stopColor="#75706a" />
            </>
          )}
        </linearGradient>
        <linearGradient id={`glass-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={after ? "#fff1ec" : "#e2ddd4"} />
          <stop offset="1" stopColor={after ? "#ff8a66" : "#9a948c"} />
        </linearGradient>
      </defs>

      <rect width="800" height="380" fill={`url(#bg-${uid})`} />
      <ellipse cx="400" cy="332" rx="330" ry="26" fill="#1f242c" opacity="0.12" />

      <path
        d="M86 268 C96 256 120 250 150 248 L196 238 C214 214 246 196 300 192 L470 188 C540 188 588 206 624 236 L706 248 C728 252 742 260 744 272 L744 296 C744 304 738 308 728 308 L96 308 C86 308 80 302 80 294 Z"
        fill={`url(#body-${uid})`}
        stroke={after ? "#b5340f" : "#6f6a62"}
        strokeWidth="1.5"
      />
      <path
        d="M214 238 C232 214 262 200 306 197 L462 195 C512 196 548 208 576 232 Z"
        fill={after ? "#b5340f" : "#5f5a53"}
        opacity="0.85"
      />
      <path d="M236 232 C252 214 276 205 304 203 L372 202 L372 232 Z" fill={`url(#glass-${uid})`} opacity="0.95" />
      <path d="M392 202 L458 203 C502 205 534 214 556 230 L392 230 Z" fill={`url(#glass-${uid})`} opacity="0.95" />
      <path d="M150 270 L700 262" stroke={after ? "#ffffff" : "#cfc9c0"} strokeOpacity={after ? 0.75 : 0.5} strokeWidth="2.5" />

      {[238, 612].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="306" r="50" fill="#1c1916" />
          <circle cx={cx} cy="306" r="50" fill="none" stroke="#3a342c" strokeWidth="6" />
          <circle cx={cx} cy="306" r="26" fill={after ? "#ff6a3d" : "#b8b2a8"} />
          <circle cx={cx} cy="306" r="6" fill="#2a2622" />
        </g>
      ))}

      {after ? (
        <path d="M120 262 C260 244 520 244 690 256 L690 250 C520 238 260 238 120 256 Z" fill="#fff" opacity="0.35" />
      ) : (
        <>
          <ellipse cx="430" cy="262" rx="58" ry="30" fill="#1f242c" opacity="0.18" />
          <path d="M470 250 l70 6" stroke="#7d776f" strokeWidth="2" opacity="0.6" />
          <circle cx="120" cy="285" r="10" fill="#75706a" opacity="0.6" />
        </>
      )}
    </svg>
  );
}
