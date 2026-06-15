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
          <stop offset="0" stopColor="#17130e" />
          <stop offset="1" stopColor="#0a0908" />
        </linearGradient>
        <linearGradient id={`body-${uid}`} x1="0" y1="0" x2="0" y2="1">
          {after ? (
            <>
              <stop offset="0" stopColor="#f0dcb4" />
              <stop offset="0.4" stopColor="#d8af6a" />
              <stop offset="1" stopColor="#7d572a" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#6b6660" />
              <stop offset="0.5" stopColor="#544f49" />
              <stop offset="1" stopColor="#37332e" />
            </>
          )}
        </linearGradient>
        <linearGradient id={`glass-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={after ? "#efe4cd" : "#888079"} />
          <stop offset="1" stopColor={after ? "#9c7b46" : "#3c3833"} />
        </linearGradient>
      </defs>

      <rect width="800" height="380" fill={`url(#bg-${uid})`} />
      <ellipse cx="400" cy="332" rx="330" ry="26" fill="#000" opacity="0.5" />

      <path
        d="M86 268 C96 256 120 250 150 248 L196 238 C214 214 246 196 300 192 L470 188 C540 188 588 206 624 236 L706 248 C728 252 742 260 744 272 L744 296 C744 304 738 308 728 308 L96 308 C86 308 80 302 80 294 Z"
        fill={`url(#body-${uid})`}
        stroke={after ? "#5a3f1d" : "#2a2622"}
        strokeWidth="1.5"
      />
      <path
        d="M214 238 C232 214 262 200 306 197 L462 195 C512 196 548 208 576 232 Z"
        fill={after ? "#2a1f10" : "#23201c"}
      />
      <path d="M236 232 C252 214 276 205 304 203 L372 202 L372 232 Z" fill={`url(#glass-${uid})`} opacity="0.9" />
      <path d="M392 202 L458 203 C502 205 534 214 556 230 L392 230 Z" fill={`url(#glass-${uid})`} opacity="0.9" />
      <path d="M150 270 L700 262" stroke={after ? "#f6ecd8" : "#7d776f"} strokeOpacity={after ? 0.7 : 0.4} strokeWidth="2.5" />

      {[238, 612].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="306" r="50" fill="#0a0908" />
          <circle cx={cx} cy="306" r="50" fill="none" stroke="#201c17" strokeWidth="6" />
          <circle cx={cx} cy="306" r="26" fill={after ? "#d8af6a" : "#9a948c"} />
          <circle cx={cx} cy="306" r="6" fill="#3a342c" />
        </g>
      ))}

      {after ? (
        <path d="M120 262 C260 244 520 244 690 256 L690 250 C520 238 260 238 120 256 Z" fill="#fff" opacity="0.28" />
      ) : (
        <>
          <ellipse cx="430" cy="262" rx="58" ry="30" fill="#000" opacity="0.32" />
          <path d="M470 250 l70 6" stroke="#cfc9c0" strokeWidth="2" opacity="0.6" />
          <circle cx="120" cy="285" r="10" fill="#6e4a22" opacity="0.6" />
        </>
      )}
    </svg>
  );
}
